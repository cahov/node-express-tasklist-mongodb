const { PORT } = require("./config.js");
const app = require("./app");
const db = require("./database");
app.listen(PORT, () => console.log("server runing in port ", PORT));

//connect to db
db();
