const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017/';
const dbName = 'cachina_01';
const collectionName = 'cachina';

let currentId = 0;
const idFilePath = 'currentId.txt';

// Function to read the current ID from the file
function readCurrentId() {
    if (fs.existsSync(idFilePath)) {
        const id = parseInt(fs.readFileSync(idFilePath, 'utf8'), 10);
        if (!isNaN(id)) {
            currentId = id;
        }
    }
}

// Function to write the current ID to the file
function writeCurrentId(id) {
    fs.writeFileSync(idFilePath, id.toString(), 'utf8');
}

readCurrentId();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Create the uploads directory if it doesn't exist
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

let photoIndex = 0;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        photoIndex++;
        const id = currentId;
        cb(null, `${id}_${photoIndex}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('photos', 3), async (req, res) => {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        console.log('Connecting to the database...');
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const data = {
            businessName: req.body.businessName,
            contactNumber: req.body.contactNumber,
            location: req.body.location,
            mapLink: req.body.mapLink,
            payment: req.body.payment,
            category: req.body.category,
            photos: req.files.map(file => file.filename),
            description: req.body.description,
            id: currentId
        };

        console.log('Received data:', data);

        const result = await collection.insertOne(data);

        console.log('Data inserted successfully with ID:', result.insertedId);
        currentId++;
        writeCurrentId(currentId);
        photoIndex = 0; // Reset photo index for the next submission

        res.status(200).send('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Failed to insert data');
    } finally {
        await client.close();
        console.log('Database connection closed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/data', async (req, res) => {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        console.log('Connecting to the database...');
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const data = await collection.find({}).toArray();

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Failed to fetch data');
    } finally {
        await client.close();
        console.log('Database connection closed');
    }
});