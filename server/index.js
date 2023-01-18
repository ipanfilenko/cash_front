const express = require("express");
const bodyParser = require("body-parser");
const app = new express();
const cors = require("cors");
const newsHandler = require("./api.js");

const router = express.Router();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/api/news", newsHandler);

app.use(router);

const port = process.env.API_PORT || 3000;
app.listen(port);
console.log("Server listening on:", port);
