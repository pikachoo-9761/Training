// console.log("hello");
// let names=["a","b","c","d","e"];
// for(let name of names){
//     console.log(name);
// }

const fs = require('fs'); //importing the fs module
const path = require('path'); //importing path module

console.log(__dirname, __filename);
let filePath = path.join(__dirname, 'text.txt');
fs.open(filePath,"w", (err,fp)=>{
    if(err){
        console.log("Error in opening");
        return;
    }
    let fileContent = "Hello World";
    fs.write(fp, fileContent, (err)=>{
        if(err){
            console.log("Error in writing");
            return;
        }
        console.log("File written successfully");
        fs.close(fp, (err)=>{
            if(err){
                console.log("Error in closing");
                return;
            }
            console.log("File closed successfully");
        })
    })
})