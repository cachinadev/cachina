const express = require('express');
const multer = require('multer');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const app = express();
const url = 'mongodb://localhost:27017/';
const dbName = 'cachina_01';
const collectionName = 'people';
let currentId = 0;

const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'build')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from 'uploads' directory

const readCurrentId = () => {
  if (fs.existsSync('currentId.txt')) {
    currentId = parseInt(fs.readFileSync('currentId.txt', 'utf8'), 10);
  } else {
    currentId = 0;
  }
};

const saveCurrentId = () => {
  fs.writeFileSync('currentId.txt', currentId.toString(), 'utf8');
};

app.post('/upload', upload.array('photos', 3), async (req, res) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  readCurrentId();

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const { businessName, category, contactNumber, location, mapLink, description } = req.body;
    const payment = req.body.payment.split(','); // Handle multiple payment methods
    const photos = req.files.map((file, index) => {
      const extension = path.extname(file.originalname);
      const newName = `${currentId}_${index + 1}${extension}`;
      fs.renameSync(file.path, path.join('uploads', newName));
      return newName;
    });

    const newEntry = {
      businessName,
      category,
      contactNumber,
      location,
      mapLink,
      payment,
      photos,
      description,
      id: currentId
    };

    await collection.insertOne(newEntry);
    currentId++;
    saveCurrentId();

    res.json({ message: 'Data uploaded successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while uploading data.' });
  } finally {
    await client.close();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});