import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/story", (req, res) => {
  res.render("index", { myStory: true });
});

app.get("/experience", (req, res) => {
  fs.readFile("experiences.json", "utf-8", (err, data) => {
    if (err) throw err;
    const experiences = JSON.parse(data);
    res.render("experience", { experiences });
  });
});

app.get("/projects", (req, res) => {
  fs.readFile("projects.json", "utf-8", (err, data) => {
    if (err) throw err;
    const projects = JSON.parse(data);
    res.render("projects", { projects });
  });
});

app.listen(port, () => {
  console.log("Server is running at port ", 3000);
});
