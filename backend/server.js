const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const slotRoutes = require("./routes/slots");
app.use("/api/slots", slotRoutes);

app.listen(PORT, () => console.log(`🚗 Backend running on port ${PORT}`));
