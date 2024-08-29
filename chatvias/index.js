const express = require("express");

const dbcon = require("./db-con");

const app = express();
const cors=require("cors");
const formidable=require("express-formidable");

app.use(cors());
app.use(formidable());
app.listen(4000);

app.get("/api",(req,res) => createServercallback(req,res));
function createServercallback(req,res){
    res.write("welcome to Express Server APIs");
    res.end();
}

// const nodemailer = require("nodemailer");

// let mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth:{
//         user:"kanthikanchana0@gmail.com",
//         pass:"bpnb buoj qlwd dytq"
//     }
// })

// let details={
//     from:"kanthikanchana0@gmail.com",
//     to:"css.harsha@gmail.com",
//     subject:"testing our nodemailer",
//     text:"testing out firts sender"

// }

// mailTransporter.sendMail(details,(err)=>{
//     if(err){
//         console.log("it has an error")
//     }
//     else{
//         console.log("email has send")
//     }
// })
app.post("/checkUser",(req,res)=>checkUserCallback(req,res));
async function checkUserCallback(req,res){
     console.log("check user api called");
     let data=await dbcon.checkLoggedInUser(req.fields.email,req.fields.password);
     res.end(JSON.stringify(data));
}
// app.post("/register",(req,res) =>  addRegisterCallback(req,res));
// async function addRegisterCallback(req,res){
//      console.log("register  save API  called");
//      let data = await dbcon.addRegister( req.fields.email,req.fields.userName,  req.fields.password);

//      res.end();
// }

app.post("/addvishal",(req,res) =>  addVishalCallback(req,res));
async function addVishalCallback(req,res){
     console.log("Vishal save API  called");
     let data = await dbcon.addVishal( req.fields.Message,req.fields.userVishalid,req.fields.sent_by,req.fields.Image,req.fields.doc);
     res.end();
}

app.post("/addavinash",(req,res) =>addavinashCallback(req,res));
async function addavinashCallback(req,res){
     console.log("Avinash save API  called");
     let data = await dbcon.addAvinash( req.fields.Message,req.fields.userAvinashid,req.fields.sent_by,req.fields.Image,req.fields.doc);
     res.end();
}

app.post("/addraghav",(req,res) =>addraghavCallback(req,res));
async function addraghavCallback(req,res){
     console.log("Raghav save API  called");
     let data = await dbcon.addRaghav( req.fields.Message,req.fields.userRaghavid,req.fields.sent_by,req.fields.Image,req.fields.doc);
     res.end();
}

app.get("/getreg",(req,res)=>getRegistercallback(req,res));
async function getRegistercallback(req,res){
console.log("register api call");
let data=await dbcon.getRegisters();
res.write(JSON.stringify(data));
res.end();
}

app.get("/getvishalchat/:id",(req,res)=>getVishalchatcallback(req,res));
async function getVishalchatcallback(req,res){
console.log("get vishal api call");
let data=await dbcon.getVishalchat(req.params.id);
res.write(JSON.stringify(data));
res.end();
}

app.get("/getavinashchat/:id",(req,res)=>getAvinashchatcallback(req,res));
async function getAvinashchatcallback(req,res){
console.log("get Avinash api call");
let data=await dbcon.getAvinashchat(req.params.id);
res.write(JSON.stringify(data));
res.end();
}

app.get("/getraghavchat/:id",(req,res)=>getRaghavchatcallback(req,res));
async function getRaghavchatcallback(req,res){
console.log("get raghav api call");
let data=await dbcon.getRaghavchat(req.params.id);
res.write(JSON.stringify(data));
res.end();
}

app.post("/addcontact",(req,res) =>addcontactsCallback(req,res));
async function addcontactsCallback(req,res){
     console.log("Contact save API  called");
     let data = await dbcon.addContact( req.fields.email,req.fields.invitation);
     res.end();
}

// app.post("/addimage",(req,res) =>addimagesCallback(req,res));
// async function addimagesCallback(req,res){
//      console.log("images save API  called");
//      let data = await dbcon.addImage( req.fields.image,req.fields.imgUserid);
//      res.end();
// }
// app.get("/getimage",(req,res)=>getImagecallback(req,res));
// async function getImagecallback(req,res){
// console.log("get image Contact api call");
// let data=await dbcon.getImage();
// res.write(JSON.stringify(data));
// res.end();
// }

app.get("/getcontact",(req,res)=>getContactcallback(req,res));
async function getContactcallback(req,res){
console.log("get Contact api call");
let data=await dbcon.getContacts();
res.write(JSON.stringify(data));
res.end();
}

// app.post("/addgroup",(req,res) =>addgroupCallback(req,res));
// async function addgroupCallback(req,res){
//      console.log("Group save API  called");
//      let data = await dbcon.addGroup( req.fields.groupName,req.fields.description);
//      res.end();
// }



app.post("/register",(req,res) =>addRegisterCallback(req,res));
async function  addRegisterCallback(req,res){
     console.log("register save API  called");
      if(req.fields.id!=null && req.fields.id!=undefined && req.fields.id!='undefined' && req.fields.id!=0){
        let data=await dbcon.updateProfile(req.fields.id,req.fields.email,req.fields.userName,req.fields.password);  
 }

else{
     let data =await dbcon.addRegister( req.fields.email,req.fields.userName,req.fields.password);
}
     res.end();
}
 
app.get("/properties/:id",(req,res)=>usercallback(req,res));
async function usercallback(req,res){
     console.log("user api saved");
     let data=await dbcon.getUser(req.params.id);
     res.write(JSON.stringify(data));
     res.end();
}