const os = require('os');
console.log(os.platform());
//   win 32      linux      darwin 

console.log(os.arch());
//  architecture of the system
// x64     x86     arm64

console.log(os.cpus().length);
//   4      8       12


console.log(os.homedir());
// home directory of the user

console.log(os.totalmem()/(1024*1024*1024) + " GB");
// total memory of the system 

// console.log(os.freemem()/(1024*1024*1024) + " GB");

console.log(os.freemem()/(1024*1024) + " MB");
// available memory of the system
// free memory of the system in bytes



// const filePath = path.resolve("core_modules.js");
// const filePath = path.resolve(__dirname, "core_modules.js");
// console.log(filePath);

// console.log(__dirname);


// const filePath = path.join("BCA", "lecture 5", "core_modules.js");
// console.log(filePath);


// const filePath = path.join(os.homedir(), "Documents");
// console.log(filePath);

// const file = "BCA/lecture 5/core_modules.js";
// console.log(path.basename(file));
// FILE NAME

// console.log(path.extname(file));
// EXTENSION
// .js

// console.log(path.dirname(file));
// DIRECTORY
// LECTURE 5

const fs = require('fs');

// const data = fs.readFileSync("./sample.txt", "utf8");
// incoding format - utf8    file ko pass karna apni langauge me read karne ke liye

// console.log(data);





fs.readFile("./sample.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});



// fs.readFile("./sample1.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });     isme error aayega kyuki sample1.txt file exist nahi karta hai




// readFileSync - synchronous method
// isme incoding use hota hai

// readFile - asynchronous method
// isme callback function use hota hai
// isme parameter me error aur data pass hota hai




console.log("A");
const data = fs.readFileSync("./sample.txt", "utf8");
console.log(data);

console.log("B");
 
//  output - A, data, B




console.log("A");
fs.readFile("./sample.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

console.log("B");     
// output - A, B, data=hello students

// read ma hum promises use kar sakte hai
// usme async await use kar karte hai



// fs.writeFileSync("./sample.txt", "Hello World");
// console.log("File updated successfully");   
// synchronous method - writeFileSync


// fs.writeFile("./sample.txt", "Hello World", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File updated successfully");
//     }
// });
// asynchronous method - writeFile



// fs.appendFileSync("./sample.txt", "\nHello World again");



// fs.unlinkSync("./sample1.txt");
// console.log("File deleted successfully");



const crypto = require('crypto');

const password = "Alex@123";

// const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log(hash);


// 256 ka matlab hai ki 256 bit ka hash generate hoga



const salt = crypto.randomBytes(16).toString('hex');
console.log(salt);

const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
console.log(hash);



const dns = require('dns');

dns.lookup('www.google.com', (err, address, family) => {
    if (err) {
        console.error(err);
    } else {
        console.log(address);
        console.log(family);
    }
});

// domain name system - dns
// lockup - ip address ko domain name me convert karna



dns.reverse("8.8.8.8", (err, hostnames) => {
    if (err) {
        console.error(err);
    } else {
        console.log(hostnames);
    }
});