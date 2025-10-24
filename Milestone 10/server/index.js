require("dotenv").config();
const express = require("express");
const cors = require("cors"); // ✅ এটা যোগ করতে হবে
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB setup
const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("SRS");
    const collection = db.collection("testCollection");

    // ✅ Example POST route
    app.post("/schedule", async (req, res) => {
      const data = req.body;
      console.log("📦 Received:", data);
      const result = await collection.insertOne(data);
      res.send(result);
    });








  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

// Call connectDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
