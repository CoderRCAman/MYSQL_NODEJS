const express = require("express");
const app = express();
const PORT = 5000;
const { sequelize } = require("./connections/database_connection");
const morgan = require("morgan");
const createRoutes = require("./routes/index");
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded(true));
sequelize
  .authenticate()
  .then((success) => {
    console.log("Database connected!....");
  })
  .catch((error) => console.log(error));
app.listen(PORT, () => {
  console.log("SERVER IS UP AND RUNNING....");
});

app.use("/", createRoutes);
// app.get('/create',(req,res) =>{
//     let sql ='CREATE TABLE posts(id int title VARCHAR(2SS), body VARCHAR(2SS) PRIMARY id)'
//     db.query(s)

// })
