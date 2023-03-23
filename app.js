const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const user = require("./routes/user.route");
const product = require("./routes/product.route");
const userProduct = require("./routes/user.product.route");

// Αρχικά χωρίς cors
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    // origin: ['https://www.section.io', 'https://www.google.com/']
  })
);

require("dotenv").config();

app.use("/", express.static("files"));

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use("/api/userproduct", userProduct);
app.use("/api/user", user);
app.use("/api/product", product);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument.options));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
// https://www.robinwieruch.de/node-express-server-rest-api/
// https://blog.appsignal.com/2022/08/17/build-a-crud-app-with-nodejs-and-mongodb.html
