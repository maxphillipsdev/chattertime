import express from "express";

const Gun = require("gun");

// Setup express app
const app = express();

// Setup port and middleware
const port = process.env.PORT || 3030;
app.use(Gun.serve);

const server = app.listen(port);

Gun({ file: "data", web: server });
