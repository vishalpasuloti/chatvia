const mysqldb=require("mysql2");
const con=mysqldb.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"system",
        database:"chatvia"
    }
);
function startConnection(){
    con.connect((err)=>{
        if(err) throw err;
        console.log("connected");
    });
}

async function checkLoggedInUser(email,password){
    startConnection();

    const query = `select id, email,userName,password
    from register
    where email = '${email}' and password = '${password}';`
    const data= await con.promise().query(query);
    return data[0];
}
async function addRegister(email,userName,password){
    startConnection();
    const query=`insert into register (email,userName,password) values('${email}','${userName}','${password}')`;
    await con.promise().query(query);
    console.log("user save api end");
    return true;

}

async function addVishal(Message,userVishalid,sent_by,Image,doc){
    startConnection();
    const currentDate = new Date();
    const currentDateTime = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().slice(0, 19).replace('T', ' ');
    
    const query=`insert into vishal (Message,userVishalid,sent_by,Image,doc) values('${Message}',${userVishalid},'${currentDateTime}','${Image}','${doc}')`;
    await con.promise().query(query);
    console.log("Vishal save api end");
    return true;

}

async function addAvinash(Message,userAvinashid,sent_by,Image,doc){
    startConnection();
    const currentDate = new Date();
    const currentDateTime = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().slice(0, 19).replace('T', ' ');
    
    const query=`insert into avinash(Message,userAvinashid,sent_by,Image,doc) values('${Message}',${userAvinashid},'${currentDateTime}','${Image}','${doc}')`;
    await con.promise().query(query);
    console.log("Avinash save api end");
    return true;

}

async function addRaghav(Message,userRaghavid,sent_by,Image,doc){
    startConnection();
    const currentDate = new Date();
    const currentDateTime = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().slice(0, 19).replace('T', ' ');
    
    const query=`INSERT INTO raghav (Message, userRaghavid, sent_by,Image,doc) VALUES ('${Message}', ${userRaghavid}, '${currentDateTime}','${Image}','${doc}')`;
    await con.promise().query(query);
    console.log("Avinash save api end");
    return true;

}

async function getRaghavchat(id){
    startConnection();
    const query=`select * from raghav`;
    const data=await con.promise().query(query);
    return data[0];
}
async function addContact(email,invitation){
    startConnection();
    const query=`insert into contact(email,invitation) values('${email}','${invitation}')`;
    await con.promise().query(query);
    console.log("contact save api end");
    return true;

}

async function getRegisters(){
    startConnection();
    const query=`select * from register`;
    const data=await con.promise().query(query);
    return data[0];
}

async function getContacts(){
    startConnection();
    const query=`select * from contact`;
    const data=await con.promise().query(query);
    return data[0];
}
async function getVishalchat(id){
    startConnection();
    const query=`select * from vishal`;
    const data=await con.promise().query(query);
    return data[0];
}

async function getAvinashchat(id){
    startConnection();
    const query=` select * from avinash`;
    const data=await con.promise().query(query);
    return data[0];
}


// async function addGroup(groupName,description){
//     startConnection();
//     const query=`insert into group(groupName,description) values('${groupName}','${description}');`;
//     await con.promise().query(query);
//     console.log("group save api end");
//     return true;

// }

async function updateProfile(id,email,userName,password){
    startConnection();
    const query=`update register set email='${email}', userName='${userName}',password='${password}'  where id=${id};`;
    await con.promise().query(query);
    return true;
}
async function getUser(id){
    const query=`select * from register where id=${id}`;
    const data=await con.promise().query(query);
    return data[0];
}

// async function addImage(image,imgUserid){
//     startConnection();
//     const query=`insert into images(image,imgUserid) values('${image}',${imgUserid})`;
//     await con.promise().query(query);
//     console.log("image save api end");
//     return true;

// }
// async function getImage(){
//     const query=`select * from images`;
//     const data=await con.promise().query(query);
//     return data[0];
// }

module.exports={
    // getImage:async()=>getImage(),
    // addImage:async(image,imgUserid)=>addImage(image,imgUserid),
    addRegister:async(email,userName,password)=>addRegister(email,userName,password),
checkLoggedInUser:async (email,password)=>checkLoggedInUser(email,password),
getRegisters:async()=>getRegisters(),
addVishal:async(Message,userVishalid,sent_by,Image,doc)=>addVishal(Message,userVishalid,sent_by,Image,doc),
getVishalchat:async(id)=>getVishalchat(id),
getAvinashchat:async(id)=>getAvinashchat(id),
getRaghavchat:async(id)=>getRaghavchat(id),
addAvinash:async(Message,userAvinashid,sent_by,Image,doc)=>addAvinash(Message,userAvinashid,sent_by,Image,doc),
addContact:async(email,invitation)=>addContact(email,invitation),
getContacts:async()=>getContacts(),
//  addGroup:async(groupName,description)=>addGroup(groupName,description),
updateProfile:async(id,email,userName,password)=>updateProfile(id,email,userName,password),
getUser:async(id)=>getUser(id),
addRaghav:async(Message,userRaghavid,sent_by,Image,doc)=>addRaghav(Message,userRaghavid,sent_by,Image,doc)
}