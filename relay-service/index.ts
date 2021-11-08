import express from "express";

const Gun = require("gun");
import "gun/axe";

// Setup express app
const app = express();

// Setup port and middleware
const port = process.env.PORT || 8765;
app.use(Gun.serve);

const server = app.listen(port);

Gun({ file: "data", web: server });
console.log("Server started on port " + port + " with /gun");
