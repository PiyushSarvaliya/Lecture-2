const fs = require(`fs`)
let opr = process.argv[2]
let folder = process.argv[3]

const create = () =>{
    fs.mkdir(folder,(err)=>{
        if(err) throw err;
        console.log("folder is create")
    })
}
const del = () =>{
    fs.rmdir(folder,(err)=>{
        if(err) throw err;
        console.log("folder is deleted")
    })
}
if(opr == "create"){
    create()
}
else if(opr == "delete"){
    del()
}