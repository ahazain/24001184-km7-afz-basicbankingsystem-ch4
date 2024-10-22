const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/config");
const routes = require("./route/routes");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
const port = config.port;

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, "swagger.json"), "utf8")
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());
app.use("/api/v1", routes);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
