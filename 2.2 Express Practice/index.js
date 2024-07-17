import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
  //   console.log(req.headers);
});

app.get("/about", (req, res) => {
  res.send("<h1>Khadyothan</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>+1 999 999 9999 </h1>");
});

// netstat -ano | findstr "LISTENING"
app.listen(port, () => {
  console.log("Server running on port 3000");
});
