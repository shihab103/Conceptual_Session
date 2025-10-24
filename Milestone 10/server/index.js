require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB setup
const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    console.log('✅ Connected to MongoDB');

    const db = client.db('SRS');
    const collection = db.collection('testCollection');
    
    

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

// Call connectDB
connectDB();

// Routes
app.get('/', async (req, res) => {
    res.send("Hello Express!")
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
