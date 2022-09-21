const { json } = require('body-parser')
const db = require('../../config/db')
const employeeModel = require('../models/employee.model')
 
exports.getEmployeeList = (req, res)=>{
    
     employeeModel.getAllEmployees((err, employee)=>{
      console.log('We are here')
      if (err)  res.send(err)
      console.log('employees', employee);
      res.send(employee)
     })
 }
 exports.getEmployeeById = (req, res)=>{
    employeeModel.getEmployeeById(req.params.id, (err, employee)=>{
        if(err) res.send(err)
        console.log('single employee data', employee)
        res.send(employee) 
    })
 }
 exports.createNewEmployee = (req, res) =>{
    const employeeReqData = new employeeModel(req.body)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({succes: false, message: 'Please fill all fiels'})
      }else{
        console.log('valid data')
        employeeModel.createEmployee(employeeReqData, (err, employee)=>{
       if(err) res.send(err)
        res.json({status: false, message:'employee created sucssesfully', data: employee.insertId})
       })
    }
 }
 exports.updateEmployee = (req, res) =>{
    const employeeReqData = new employeeModel(req.body)
    console.log('employeeReqData update', employeeReqData );
    if(req.body.contructor === Object && Object(req.body).length === 0){
         res.send(400).send({succes: false, message: 'Please fill all fiels'})
      }else{
        employeeModel.updateEmployee(employeeReqData, (err, employee)=>{
       if(err){
        res.send(err)
        res.json({status: false, message:'Employee Created Succesfully', data: employee.insertId})
       }
        })
    }
 } 
