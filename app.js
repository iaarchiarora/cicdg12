// console.log("app.js file");
// console.log(new Date());
// <<<<<<< HEAD
// =======
// console.log("edited in browser");

// >>>>>>> refs/remotes/origin/main

console.log("app.js file for node");
console.log(new Date());
console.log("Added Line 3");
console.log("edited in browser");
const app=require('express');
app.length('/',(req,res)=>{
    res.json({message:"server running"});
});
app.listen(700,()=>{
    console.log("server running on 7000");
});
