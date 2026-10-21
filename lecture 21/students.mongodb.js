use("UniversityDB")



///Create Operation

// db.students.insert([ //insert,insertOne,insertMany
//     {
//         name: "Alex",
//         section: "D",
//         course: "Btech",
//         semester: 4,
//         marks: 70,
//         contact: 1896567890,
//         city: "Gurugram"
//     },
//     {
//         name: "John",
//         section: "A",
//         course: "Btech",
//         semester: 4,
//         marks: 95,
//         contact: 2887264827,
//         city: "Delhi"
//     }
// ])


//Read Operation

// db.students.find() //find,findOne

// db.students.find({course:"BCA"}) //greater than 80

////////update

// db.students.updateOne(
//     {name:"Ansh"},
//     {
//         $set:{
//             course: "Btech",
//             marks: 90,
//             name: "Anshika"
//         }
//     }
// )

// db.students.deleteOne({
//     _id: ObjectId("6ad8556c96fd0c71fb2a80ee")
// })

// db.students.find(
//     {
//         city:{
//              $eq:"Gurugram"
//         }
//     }
// )

// db.students.find(   //ANd
//     {marks:{$gt:80}, city:{$eq:"Gurugram"}}
    
// )

// db.students.find(   //OR
//     {$or:[{marks:{$gt:80}}, {city:{$eq:"Gurugram"}}]}
    
// )

// db.students.find({},{_id:0, name:1, marks:1, section:1})
// db.students.find({section:"A"},{_id:0, name:1, marks:1, section:1})

// db.students.find().skip(3).limit(3)

db.students.find().sort({marks:-1}) //ascending 1, descending -1