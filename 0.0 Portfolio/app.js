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

app.listen(port, () => {
  console.log("Server is running at port ", 3000);
});
