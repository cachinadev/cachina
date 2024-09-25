const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Ads MVP API');
});

app.get('/ads', (req, res) => {
    const ads = [
      { title: 'Ad 1', category: 'Alquilo', location: 'City 1' },
      { title: 'Ad 2', category: 'Compro', location: 'City 2' }
    ];
    res.json(ads);
  });

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});