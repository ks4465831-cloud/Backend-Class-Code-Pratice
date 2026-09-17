const express = require('express');
const studentController = require('../controller/studentController');
const router = express.Router();

router.get('/', studentController.getStudents);
router.get('/:rollNo', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:rollNo', studentController.updateStudent);
router.delete('/:rollNo', studentController.deleteStudent);

module.exports = router;