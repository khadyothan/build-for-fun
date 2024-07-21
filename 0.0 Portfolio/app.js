import express from "express";

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
  res.render("experience");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.listen(port, () => {
  console.log("Server is running at port ", 3000);
});
