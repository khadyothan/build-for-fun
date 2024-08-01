import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const API_URL = "https://serpapi.com/search";

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  try {
    const query = req.body.query;
    const params = {
      engine: "google_scholar",
      q: query,
      num: 1,
      api_key:
        "42ff1f97a2f61f6b6c3e7c818866500ca9c599a6b13a2376aeb2781e44e87a16",
    };
    const response = await axios.get(API_URL, { params });
    const paper = response.data.organic_results[0];
    res.render("index", { paper: paper });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
