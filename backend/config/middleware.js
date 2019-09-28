const express = require("express");
const cors = require("cors");
const router = require("../routes/routes");

module.exports = server => {
  server.use(express.json());
  server.use(
    cors({
      origin: process.env.ORIGIN
    })
  ),
    server.use("/api", router);
};
