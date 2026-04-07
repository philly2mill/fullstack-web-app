const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = []; // 👈 simple in-memory storage

// GET all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST item
app.post("/api/items", (req, res) => {
  const newItem = {
    id: Date.now().toString(),
    name: req.body.name,
    value: req.body.value
  };
  items.push(newItem);
  res.json(newItem);
});

// PUT item
app.put("/api/items/:id", (req, res) => {
  items = items.map(item =>
    item.id === req.params.id ? { ...item, ...req.body } : item
  );
  res.json({ message: "Updated" });
});

// DELETE item
app.delete("/api/items/:id", (req, res) => {
  items = items.filter(item => item.id !== req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));