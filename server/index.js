const express = require("express");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// set Public Folder
app.use(express.static("public"));
// parse application/json
app.use(express.json({ limit: "10mb", extended: true }));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ???
app.use((err, req, res, next) => {
  if (err) return res.json({ err: "something is wrong" });
  next();
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
