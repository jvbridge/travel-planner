const express = require("express");
// TODO: const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: app.use(routes);

app.listen(PORT, () => {
  console.log("App now listening on port: ", PORT);
});
