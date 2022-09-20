const mysql = require('mysql2')

const db = mysql.createConnection({
  host: '127.0.0.1' ,
  user: 'root' ,
  port: 3306,
  password: '',
  database: "nodemysql"
})
//Error Check
db.connect((error)=>{
  if (error) {
    console.log("error", JSON.stringify(error));
    throw error}
  console.log('DataBase is Connected!!')
})  
module.exports = db
