const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const docxReaderRoutes = require("./routes/tools/docx-reader");


app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/api/tools/docxReader", docxReaderRoutes);


app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});