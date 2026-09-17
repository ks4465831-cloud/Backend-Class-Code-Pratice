const express = require("express");

const students = require("./data/studentData");

const studentController = require("./controller/studentController");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/students",studentRoutes);


// Read Operation
app.get("/students", studentController.getStudents);

// Read operation with id
app.get("/students/:rollNo", studentController.getStudentById);

//create operation

app.post("/students", studentController.createStudent);


//update operation
app.put("/students/:rollNo", studentController.updateStudent);

//delete operation
app.delete("/students/:rollNo", studentController.deleteStudent);
   

  
app.listen(PORT, () => console.log("server is running"));