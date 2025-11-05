import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/slots")
      .then(res => res.json())
      .then(data => setSlots(data));
  }, []);

  const toggleSlot = (id) => {
    fetch(`http://localhost:5000/api/slots/toggle/${id}`, { method: "POST" })
      .then(res => res.json())
      .then(data => setSlots(data.slots));
  };

  return (
    <div className="App">
      <h1>🚘 Smart Parking System</h1>
      <div className="slots">
        {slots.map(slot => (
          <div
            key={slot.id}
            className={`slot ${slot.available ? "available" : "occupied"}`}
            onClick={() => toggleSlot(slot.id)}
          >
            {slot.location} - {slot.available ? "Available ✅" : "Occupied ❌"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
