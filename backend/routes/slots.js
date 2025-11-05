const express = require("express");
const router = express.Router();

// Dummy parking slot data
let slots = [
  { id: 1, location: "A1", available: true },
  { id: 2, location: "A2", available: false },
  { id: 3, location: "B1", available: true }
];

// Get all slots
router.get("/", (req, res) => {
  res.json(slots);
});

// Toggle slot availability
router.post("/toggle/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const slot = slots.find(s => s.id === id);
  if (slot) {
    slot.available = !slot.available;
    res.json({ message: "Slot updated", slots });
  } else {
    res.status(404).json({ message: "Slot not found" });
  }
});

module.exports = router;
