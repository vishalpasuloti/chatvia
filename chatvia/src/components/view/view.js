// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { UserContext } from "../../services/usercontext.service";

export function View(){
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
} =useForm();

const [vischat, setVischat] = useState([]);
const user =useContext(UserContext);
const { id } =useParams();




async function saveData(data) {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("Message", data.Message);
    formData.append("userAvinashid", user.id);
  
    await axios.post("http://localhost:4000/addavinash", formData);
    reset();
    getVischat(); // Refresh chat after sending message
}

async function getVischat() {
    const url = "http://localhost:4000/getavinashchat/"+id;
    let response = await axios.get(url);
    setVischat(response.data);
}
useEffect(() => {
    getVischat();
}, []);


  async function saveData(data) {
    let formData = new FormData();
    formData.append("email",data.email);
    formData.append("invitation", data.invitation);
   

    await axios.post("http://localhost:4000/addcontact", formData);
    // Refresh chat after sending message
    document.location.reload();
}

const [cont,setCont]=useState([]);
  const [Reg, setReg] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getContactList();
    getContactslist();
}, []);

async function getContactList() {
  const url = "http://localhost:4000/getreg";
  let response = await axios.get(url);
  setReg(response.data);
}

async function getContactslist() {
  const url = "http://localhost:4000/getcontact";
  let response = await axios.get(url);
  setCont(response.data);
}

  return(
    <div className="m-2 mt-2 bg-light"  style={{position:"absolute",float:"top",top:-7,left:70,width:"370px",padding:"10px",backgroundColor:"#f5f7fb",height:"650px"}}>
      <form onSubmit={handleSubmit(saveData)}>
      <h5 className="mt-4 m-3">
                    Contacts
                    <i style={{ cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@fat"
                        className="ri-group-line h5 float-end"
                       
                       
                    ></i>
                </h5>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create New Contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                <h1 style={{ textAlign: "center", color: "black" }}>Contact</h1><hr />
                <div className="card">
                    <div className="p-4 card-body">
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                {...register('email', { required: true })}
                            />
                            {errors.email && <div className="text-danger">* Contact Name Required</div>}
                        </div>
                        
                               
                               
                        <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <textarea
                                className="form-control"
                                id="invitation"
                                name="invitation"
                                {...register('invitation', { required: true })}
                            ></textarea>
                            {errors.invitation && <div className="text-danger">*Invitation</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Add Contact</button>
                        </div></div>
                        </div></div>
                        
                        </div>
                        
      </form>
  <div>
   
  <div className="mt-4" style={{ display: "flex", justifyContent: "center" }}>
  <div className="search-box chat-search-box" style={{ maxWidth: "350px", width: "100%" }}>
    <div className="input-group input-group-lg" style={{ backgroundColor: "#e6ebf5", borderRadius: "5px" }}>
      <button type="button" className="text-decoration-none text-muted pr-1 btn btn-link" style={{ padding: "0 8px" }}>
        <i className="ri-search-line search-icon font-size-14" style={{ backgroundColor: "#e6ebf5" }}></i>
      </button>
      <input 
        placeholder="Search groups..." 
        type="text" 
        className="form-control" 
        style={{ backgroundColor: "#e6ebf5", border: "none", outline: "none", boxShadow: "none", fontSize: "15px" }} 
      />
    </div>
  </div>
</div>

         <div className="m-3">
            {
                Reg.map(bindData)
            }
            </div>
            <div className="m-3">
            {
                cont.map(BindDatas)
            }
            </div>
  </div>
  
<div style={{ position: "absolute", float: "top", top: -1, left:383,width:"875px" }}>
<div className="row p-1 avi" >
  <div className="col-lg-8 col-sm-4 d-flex p-3 mt-2">
  <img src={require("../../assets/images/prof.jpg")} height="35" alt="" className="profile-user rounded-circle" /><span className="ms-2 mt-2" style={{ fontSize: "15px",fontWeight:'bold' }}>Patric Hendricks</span>
  </div>
  <div className="col-lg-4 col-sm-8 p-3">
    <ul style={{display:"flex",flexDirection:'row',listStyle:'none'}}>
      <li>
      <button type="button" aria-haspopup="true" aria-expanded="false" className="btn nav-btn btn btn-none">
                                        <i className="ri-search-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                    </button>      </li>
      <button type="button" className="btn nav-btn">
                                    <i className="ri-phone-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                </button>
      <li>
      <button type="button" class="btn btn-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i className="ri-vidicon-line"  style={{fontSize:'20px',color:"#878a92"}}></i>
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input 
          
             type="text" 
             placeholder="Enter Room Code"></input>
      </div>
      <div class="modal-footer">
      <button >Join</button>
      </div>
    </div>
  </div>
</div>       </li>
       <li>
       <button type="button" className="btn nav-btn">
                                    <i className="ri-user-2-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                </button>       </li>
       <li>
       <button type="button" aria-haspopup="true" aria-expanded="false" className="btn nav-btn btn btn-none">
                                        <i className="ri-more-fill" style={{fontSize:'20px',color:"#878a92"}}></i>
                                    </button>       </li>
    </ul>
  </div>
</div>
<div className=" mt-3" style={{ width: "871px",height: "430px"}}>

                       
                       
                    
                
</div>
<form style={{width:'871px'}} >
  <div className="row avis p-4">
    <div className="col-lg-8 col-sm-4">
<input type="text" className="form-control form-control-lg bg-light border-light form-control"  placeholder="Enter Message..."></input> 
    </div>
    <input type="hidden" name="sent_by" /> 
    <div className="col-lg-4 col-sm-8">
      <ul style={{listStyle:'none',display:'flex',flexDirection:'row'}}>
        <li>
        
        <label id="files" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-emotion-happy-line"></i>
                    <input
                        type="text" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  
                      
                    />
                    
                    
                
               
                 </label> 
        </li>
        <li>
        
     <label id="files" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-attachment-line"></i>
                    <input
                        type="file" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  
                    />
                    
                    
                
               
                 </label>
                                        
      </li>
      <li>
        
       
      <label id="images" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-image-fill"></i>
                    <input
                        type="file" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  
                    />
                    
                    
                
               
                 </label>
                             
      </li>

      <li>
                                    <button type="submit" className="btn btn-none" style={{ border: "none" }}>
                                        <i className="ri-send-plane-2-fill" style={{ fontSize: "25px", cursor: "pointer", border: "1px solid #7269ef", borderRadius: "4px", color: "white", backgroundColor: "#7269ef", padding: "5px", width: "50px"}}></i>
                                    </button>
                                </li>

      </ul>
    </div>
  </div>

  </form>
                </div>
                   
       

    </div>
    
  )
}
function bindData(item,index,arr){
  return(
    <div>
    
      <h6 style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <br/>
      {item.userName} <label ><i className="ri-more-2-fill float-end"></i> </label>
      
   
    
    </h6>
   
       
   </div>
   
   
   
        
        )
    }

function BindDatas(item,index,arr){
  return(
    <div>
    <h6 style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <br/>
      {item.email}  <label ><i className="ri-more-2-fill float-end" ></i> </label>
    </h6>
    </div>
  )
}
   
    
      
export default View;