const EventEmitter = require("events")
const emitter = new EventEmitter()

// emitter.on("bellRing" ,()=>{
//     console.log("Student should visit their classes")

// })

// emitter.on("bellRing" ,(time)=>{
//     console.log("time is "+time + " Student should visit their classes")

// })

// emitter.once("bellRing" ,(time)=>{
//     console.log("time is "+time + " Student should visit their classes")

// })

const student = (time)=>{
    console.log("time is "+time + " Student should visit their classes")

}
emitter.on("bellRing",student)
// emitter.on("bellRing" ,()=>{
//     console.log("Teacher should start teach")

// })
// emitter.on("bellRing" ,()=>{
//     console.log("Security closes the gate")

// })


// emitter.emit("bellRing")
// emitter.emit("bellRing")
// emitter.emit("bellRing","10:00")
// emitter.emit("bellRing","10:00")
emitter.off("bellRing", student)

