const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
