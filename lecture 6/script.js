console.log("Hello, World!");


const process = require('process');
const data = process.argv


console.log(data);

console.log(data[2]); 


console.log(data[2]+" "+data[3]);

console.log(Number(data[2])+Number(data[3]));

console.log(process.version);

console.log(process.platform);

console.log(process.arch);

console.log(process.pid);

console.log(process.cwd());


