 var db = require('../../config/db')

 var Employee = function(employee){
  this.id = employee.id
  this.first_name = employee.first_name
  this.last_name = employee.last_name
  this.city_name = employee.city_name
}

//Get  All Employee
Employee.getAllEmployees = (result) =>{
    db.query(`SELECT * FROM employee;`, (err, res)=>{
      if (err)  {
        console.log('error while fetching', err)
        result(null, err) 
      } else { 
        console.log('Employee fetched Successfully !!!');
           result(null, res) 
      }
    })
}
Employee.getEmployeeById = (id,result) =>{
  db.query(`SELECT * FROM employee WHERE id=${id};`, (err, res)=>{
    if (err)  {
      console.log('error while fetching', err)
      result(null, err) 
    } else { 
      console.log('Employee fetched Successfully !!!');
         result(null, res) 
    }
  })
}

Employee.createEmployee = (employeeReqData, result)=>{
  db.query('INSERT INTO employee SET ?', employeeReqData, (err ,res)=>{
        if (err){
          console.log('error while inserting new data', err)
          result(null, err)
        }else{
          console.log('employee created succesfully');
          result(null, res)
        }
    })
}
module.exports = Employee