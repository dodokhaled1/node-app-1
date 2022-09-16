const mysql = require('mysql2')

const db = mysql.createConnection({
     'host': 'localhost',
     'user':'root',
     'root': '3000',
     'password':'' ,
     'database': 'nodemysql'
})
//Error Check
db.connect((error)=>{
  if (error) throw error
  console.log('DataBase is Connected!!')
})
