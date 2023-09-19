// // Example for Blocking JS

// for(let i=0; i<30000000; i++){
    

// }

// console.log("This line is printed after executing of loop");
// console.log("This line didn't take any time");


// Example for Non-Blocking JS

setTimeout(() => {
    console.log('Task is performed after 5 seconds');
},5000);

console.log("Line executed just after the before line");