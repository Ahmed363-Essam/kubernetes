import express from "express";
import os from "os";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from ${os.hostname()}! Version 1.2.0 `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Hostname: ${os.hostname()} Version 1.2.0`);
});

