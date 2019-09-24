require("dotenv").config();

const PORT = process.env.PORT || 3333;
const server = require("./api/server.js");

server.listen(PORT, () => {
  console.log(`\nRunning on port: ${PORT}\n`);
});
