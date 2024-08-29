import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../services/usercontext.service";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import './avinash.css';
export function Avinash() {
    const [Image, setUserImage] = useState(null);
    const[docs,setDocs]=useState(null);
    const [message, setMessage] = useState("");
    const [vischat, setVischat] = useState([]);
    const user = useContext(UserContext);
    
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [value,setValue]=useState();
    const navigate=useNavigate();
    const handleJoinRoom=useCallback(()=>{
        navigate(`/room/${value}`)

    },[navigate,value]);
   

    async function saveData(data) {
        let formData = new FormData();
        formData.append("id", id);
      
        formData.append("userAvinashid", user.id);
        formData.append("sent_by", new Date().toISOString()); 
       
        if (message) {
            formData.append("Message", message);
          }
         else {
          
          formData.append("Message", "");
        }
      
      
          
          if (Image) {
            formData.append("Image", Image);
          } else {
            
            formData.append("Image", "");
          }
    
      if(docs){
        formData.append("doc",docs);
      }
      else{
        formData.append("doc","");
      }
        await axios.post("http://localhost:4000/addavinash", formData);
        reset();
        setMessage(""); 
        getVischat(); 
    }

    async function getVischat() {
        const url = "http://localhost:4000/getavinashchat/"+id;
        let response = await axios.get(url);
        setVischat(response.data);
    }
    useEffect(() => {
        getVischat();
    }, []);

    function handleMessageChange(event) {
        setMessage(event.target.value);
        setUserImage(null); 
        setDocs(null);
      }
    
      function convertFile(event) {
        var reader = new FileReader();
    
        
        reader.onload = function () {
          var dataURL = reader.result;
    
          
          setUserImage(dataURL); 
          setMessage(""); 
        };
    
    
        reader.readAsDataURL(event.target.files[0]);
      }
      function convertFiles(event) {
        var reader = new FileReader();
    
        
        reader.onload = function () {
          var dataURL = reader.result;
    
          
          setDocs(dataURL); 
          setMessage(""); 
          setUserImage(null);
        };
    
    
        reader.readAsDataURL(event.target.files[0]);
      }
    return (
        <div>
            <div  className=" mt-2 bg-light" style={{position:"absolute",float:"top",top:-8,left:76,width:"375px",backgroundColor:"#f5f7fb",height:"656px"}}>
            <div className>
                        <h4 className="m-3">Chats</h4>
                        <div style={{ display: "flex", justifyContent: "center" }}>
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

<div className="px-4 pb-4 dot_remove mt-4" dir="ltr">
  <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
    <div className="item ms-2">
      <Link to="/avinash" className="user-status-box" style={{ textDecoration: "none", color: "black" }}>
        <div className="avatar-xs mx-auto d-block chat-user-img online" style={{ position: "relative" }}>
          <img src={require("../../assets/images/doris.jpg")} style={{ width: "40px", position: "relative", zIndex: 1 }} alt="user-img" className="img-fluid rounded-circle" />
          <span className="user-status"></span>
          <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", width: "70px", height: "50px", backgroundColor: "#e6ebf5", borderRadius: "5px", zIndex: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span className="font-size-13 mt-3">Patrick</span>
          </div>
        </div>
      </Link>
    </div>
    <div className="item ms-5">
      <Link to="/vishal" className="user-status-box" style={{ textDecoration: "none", color: "black" }}>
        <div className="avatar-xs mx-auto d-block chat-user-img online" style={{ position: "relative" }}>
          <img src={require("../../assets/images/ava.jpg")} style={{ width: "40px", position: "relative", zIndex: 1 }} alt="user-img" className="img-fluid rounded-circle" />
          <span className="user-status"></span>
          <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", width: "70px", height: "50px", backgroundColor: "#e6ebf5", borderRadius: "5px", zIndex: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span className="font-size-13 mt-3">Messer</span>
          </div>
        </div>
      </Link>
    </div>
    <div className="item ms-5">
      <Link to="/raghav" className="user-status-box" style={{ textDecoration: "none", color: "black" }}>
        <div className="avatar-xs mx-auto d-block chat-user-img online" style={{ position: "relative" }}>
          <img src={require("../../assets/images/paul.jpg")} style={{ width: "40px", height: "40px", position: "relative", zIndex: 1}} alt="user-img" className="img-fluid rounded-circle" />
          <span className="user-status "></span>
          <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", width: "70px", height: "50px", backgroundColor: "#e6ebf5", borderRadius: "5px", zIndex: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span className="font-size-13 mt-3">Doris</span>
          </div>
        </div>
      </Link>
    </div>
    <div className="item ms-5">
      <Link to="#" className="user-status-box" style={{ textDecoration: "none", color: "black" }}>
        <div className="avatar-xs mx-auto d-block chat-user-img online" style={{ position: "relative" }}>
          <img src={require("../../assets/images/patrtic.jpg")} style={{ width: "40px", height: "40px", position: "relative", zIndex: 1 }} alt="user-img" className="img-fluid rounded-circle" />
          <span className="user-status"></span>
          <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", width: "70px", height: "50px", backgroundColor: "#e6ebf5", borderRadius: "5px", zIndex: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span className="font-size-15 mt-3">John</span>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>
            <div className="m-2">
              <h6>Recent</h6></div>
              <div className="mt-3" style={{marginLeft:"0px"}}>
<ul style={{listStyle:'none',padding:'10px'}}>
<li id="loi" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
  <img
    src={require("../../assets/images/patrtic.jpg")}
    height="35"
    alt=""
    className="profile-user rounded-circle me-3 mb-0"
  />
  <Link to="/avinash" style={{textDecoration:'none',color:'black'}}>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h5 style={{ fontSize: '15px', marginBottom: '5px' }}>Patric hendricks</h5> {/* Name */}
    <p className="info me-5" style={{ fontSize: '14px', margin: '0',color:"#878a92" }}>Hey there im available</p> {/* Paragraph */}
  
  </div></Link>
  <span className="ms-5" style={{color:"#878a92",fontSize:"12px"}}>02:30 PM</span>
</li>

<li id="loi" className="mt-3 mb-3" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
  <img
    src={require("../../assets/images/paul.jpg")}
    height="35"
    alt=""
    className="profile-user rounded-circle me-3 mb-0"
  /> <Link to="/vishal" style={{textDecoration:'none',color:'black'}}>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h5 style={{ fontSize: '15px', marginBottom: '5px' }}>Mark Messer</h5> {/* Name */}
    <p className="info me-5" style={{ fontSize: '14px', margin: '0',color:"#878a92" }}>This theme  awesome!</p> {/* Paragraph */}
  
  </div></Link>
  <span className="ms-5" style={{color:"#878a92",fontSize:"12px"}}>10:30 AM</span>
</li>

<li id="loi" className="mt-3 mb-3" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
  <img
    src={require("../../assets/images/prof.jpg")}
    height="35"
    alt=""
    className="profile-user rounded-circle me-3 mb-0"
  /><Link to="/raghav" style={{textDecoration:'none',color:'black'}}>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h5 style={{ fontSize: '15px', marginBottom: '5px' }}>General</h5> {/* Name */}
    <p className="info me-5" style={{ fontSize: '14px', margin: '0',color:"#878a92" }}>Hey there im available</p> {/* Paragraph */}
  
  </div></Link>
  <span className="ms-5" style={{color:"#878a92",fontSize:"12px"}}>04:06 PM</span>
</li>

<li id="loi" className="mt-3 mb-3" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
  <img
    src={require("../../assets/images/doris.jpg")}
    height="35"
    alt=""
    className="profile-user rounded-circle me-3 mb-0"
  />
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h5 style={{ fontSize: '15px', marginBottom: '5px' }}>Doris Brown</h5> {/* Name */}
    <p className="info me-5" style={{ fontSize: '14px', margin: '0',color:"#878a92" }}>Hey there im available</p> {/* Paragraph */}
  
  </div>
  <span className="ms-5" style={{color:"#878a92",fontSize:"12px"}}>01:12 AM</span>
</li>

<li id="loi" className="mt-3 mb-3" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
  <img
    src={require("../../assets/images/steve.jpg")}
    height="35"
    alt=""
    className="profile-user rounded-circle me-3 mb-0"
  />
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h5 style={{ fontSize: '15px', marginBottom: '5px' }}>Steve Walker</h5> {/* Name */}
    <p className="info me-5" style={{ fontSize: '14px', margin: '0',color:"#878a92" }}>Hey there im available</p> {/* Paragraph */}
  
  </div>
  <span className="ms-5" style={{color:"#878a92",fontSize:"12px"}}>2:10 min</span>
</li>

<li id="loi" className="mt-4 mb-4" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
  <img
    src={require("../../assets/images/emily.jpg")}
    height="35"
    alt=""
    className="profile-user rounded-circle me-3 mb-0"
  />
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h5 style={{ fontSize: '15px', marginBottom: '5px' }}>Designer</h5> {/* Name */}
    <p className="info me-5" style={{ fontSize: '14px', margin: '0',color:"#878a92" }}>Hey there im available</p> {/* Paragraph */}
  
  </div>
  <span className="ms-5" style={{color:"#878a92",fontSize:"12px"}}>01:16 PM</span>
</li>




</ul>
    
    </div>
                    </div>
                <div style={{ position: "absolute", float: "top", top: -1, left:388,width:"871px" }}>
<div className="row p-1 avi">
  <div className="col-lg-8 col-sm-4 d-flex p-3 mt-2">
  <img src={require("../../assets/images/prof.jpg")} height="35" alt="" className="profile-user rounded-circle" /><span className="ms-2 mt-2" style={{ fontSize: "15px",fontWeight:'bold' }}>Patric Hendricks</span>
  </div>
  <div className="col-lg-4 col-sm-8 p-3">
    <ul style={{display:"flex",flexDirection:'row',listStyle:'none'}}>
      <li>
      <button type="button" aria-haspopup="true" aria-expanded="false" className="btn nav-btn btn btn-none">
                                        <i className="ri-search-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                    </button>      </li>
    <li> <button type="button" className="btn nav-btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    <i className="ri-phone-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div >
       
        <h5 class="modal-title" id="exampleModalLabel1">  <img src={require("../../assets/images/prof.jpg")} height="55" alt="" className="profile-user rounded-circle mt-5" /></h5>
        <div><h3>Patric Hendricks</h3></div>
        <div style={{color:"#878a92"}}>Start Audio call</div>
     <div className="mt-5 mb-5">  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button><span ><i style={{border:'1px solid green', borderRadius:'21px',fontSize:'30px',padding:'5px'}} className="ri-phone-fill bg-success text-light ms-5"></i></span>
      </div></div> 
      <div >
    
      </div>
      <div>
    
      </div>
    </div>
  </div>
</div>      
                                </button></li>
      <li>
      <button type="button" class="btn btn-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i className="ri-vidicon-line"  style={{fontSize:'20px',color:"#878a92"}}></i>
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div className="" style={{textAlign:'center'}}>
        <h5 class="modal-title" id="exampleModalLabel"><img src={require("../../assets/images/prof.jpg")} height="55" alt="" className="profile-user rounded-circle mt-5" /></h5>
        <div className=""><h3>Patric Hendricks</h3></div>
        <div className="" style={{color:"#878a92"}}>Start Video call</div>
        <input className=" mt-3"
            value={value} 
            onChange={(e)=>setValue(e.target.value)}
             type="text" 
             placeholder="Enter Room Code"></input>
       <div className="mt-5 mb-5 ">
        <button type="button" class="btn-close me-5" data-bs-dismiss="modal" aria-label="Close"></button>
        <span><span><i style={{border:'1px solid green', borderRadius:'25px',fontSize:'25px',padding:'10px',cursor:'pointer'}} onClick={handleJoinRoom} className="ri-vidicon-line bg-success text-light ms-5"></i></span></span>
        </div>
        </div>
      
      <div class="">
      {/* <button onClick={handleJoinRoom}>Join</button> */}
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

                        {vischat.map((item, index) => (
                            <div key={id} style={{marginBottom:"10px", textAlign: item.userAvinashid === user.id ? 'right' : 'left' }}>
{item.Message ? <span style={{padding:"5px",backgroundColor:"#7269ef",border:"1px solid none",color:"white"}} className="mb-5">{item.Message}</span> : null}
                {item.Image ? <img style={{ width: "140px" }} src={item.Image} alt="Chat" className="mt-3 mb-3"/> : null}
                {item.doc ? <a href={item.doc} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',border:'1px solid lightblue', backgroundColor:'#e6ebf5',padding:'2px'}}>Download File <i className="ri-download-2-line" style={{color:"#878a92"}}></i></a> : null}

                <span style={{fontSize:"10px",color:"#7a7f9a"}}>{new Date(item.sent_by).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>                               

                {/* {item.doc ? <embed src={item.doc} type="application/pdf" width="100%" height="100px" /> : null} */}

                </div>
                            
                        ))}
                       
                    
                
</div>
<form style={{width:'871px'}} onSubmit={handleSubmit(data => saveData(data))}>
  <div className="row avis p-4">
    <div className="col-lg-8 col-sm-4">
<input type="text" className="form-control form-control-lg bg-light border-light form-control"  placeholder="Enter Message..."{...register('Message')}  value={message} onChange={handleMessageChange}></input> 
    </div>
    <input type="hidden" name="sent_by" value={new Date().toISOString()} /> 
    <div className="col-lg-4 col-sm-8">
      <ul style={{listStyle:'none',display:'flex',flexDirection:'row'}}>
        <li>
        
        <label id="files" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-emotion-happy-line" style={{color: "#7269ef"}}></i>
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
                    <i className="ri-attachment-line" style={{color: "#7269ef"}}></i>
                    <input
                        type="file" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  onChange={(event) => {
                            convertFiles(event);
                          }}
                    />
                    
                    
                
               
                 </label>
                                        
      </li>
      <li>
        
       
      <label id="images" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-image-fill" style={{color: "#7269ef"}}></i>
                    <input
                        type="file" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  onChange={(event) => {
                            convertFile(event);
                          }}
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
                   </div>
    );
}

export default Avinash;