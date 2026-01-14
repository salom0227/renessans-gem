import express from "express";

const app = express();

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
