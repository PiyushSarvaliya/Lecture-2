const fs= require('fs')

let opr = process.argv[2]
let filename = process.argv[3]
let data = process.argv[4]
let newfile = process.argv[5]

const write = () =>{
    fs.writeFile(filename,data,(err)=>{
        if (err) throw err;
        console.log(`file successfulliy created ${filename}`)
    })
}
const read = () =>{
    fs.readFile(filename,"utf-8",(err,data)=>{
        if (err) throw err;
        console.log(`file successfulliy read ${filename} /n ${data}`)
    })
}
const append = () =>{
    fs.appendFile(filename , data, (err)=>{
        if (err) throw err;
        console.log("data is successfulliy append")
    })
}
const rename = () =>{
    fs.rename(filename , newfile ,(err)=>{
        if(err) throw err;
        console.log("file name is successfully change")
    })
}
const del = () =>{
    fs.unlink(filename , (err) =>{
        if(err) throw err;
        console.log("file is deleted")
    })
}

if(opr== "create"){
    write();
}
else if(opr=="read"){
    read();
}
else if(opr == "append"){
    append();
}
else if(opr == "delete"){
    del();
}
else if(opr == "rename"){
    rename();
}