const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('hello world')
  })

  const employeeRouters = require('./src/routes/employee.routes') 
app.use('/api/v1/employee', employeeRouters)

app.listen(process.env.PORT || 8000 ,()=>{
    console.log('Server is running on port 8000');
})
