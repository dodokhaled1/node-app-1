const express = require('express')
const router = express.Router() 

const employeeController = require('../controllers/employee.controllers')

 router.get('/', employeeController.getEmployeeList)

 router.get('/:id', employeeController.getEmployeeById)

 router.post('/', employeeController.createNewEmployee)

 module.exports = router
 