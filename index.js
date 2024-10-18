const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/config");
const routes = require("./route/routes");
const port = config.port;


app.use(bodyParser.json());
app.use("/api/v1", routes);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
