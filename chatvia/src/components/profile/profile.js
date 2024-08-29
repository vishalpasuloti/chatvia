import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../services/usercontext.service"
import prof from "../../assets/images/prof.jpg"
import { GoDotFill } from "react-icons/go";
import './profile.css';

import { FaChevronDown } from "react-icons/fa";
import Collapses from "../collapses/collapses";
import {  Card, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";


export function Profile(){
    const user=useContext(UserContext);
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(true);
    const [profileImage, setProfileImage] = useState(prof); // State to store profile image URL

    const { t } = useTranslation();

    useEffect(() => {
        // Load profile image from localStorage if available on component mount
        const savedImage = localStorage.getItem("profileImage");
        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);


    const toggleCollapse1 = () => {
        setIsOpen1(!isOpen1);
        // setIsOpen2(false);
        // setIsOpen3(false);
        // setIsOpen4(false);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageData = reader.result;
                setProfileImage(imageData);
                // Save image data to localStorage
                localStorage.setItem("profileImage", imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div id="profile" className="m-2 mt-2 bg-light" style={{position:"absolute",float:"top",top:-7,left:70,width:"370px",padding:"10px",backgroundColor:"#f5f7fb",height:"650px"}}>
            <div>
                <h4 className="me-5 ">My Profile <span className="ms-5"></span></h4>
                
            </div>
            <div className="mt-5" style={{ textAlign: "center", position: "relative" }}>
                <label htmlFor="profile-picture" style={{ position: "relative", display: "inline-block" }}>
                    <img src={profileImage} height="70" alt="Profile" className="profile-user rounded-circle" />
                    <div style={{ position: "absolute", bottom: 0, right: 0, cursor: "pointer" }}>
                      <i className="ri-edit-fill"></i>
                        <input type="file" id="profile-picture" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
                    </div>
                </label>
            </div>
<div style={{textAlign:"center"}}>
   {
    user && user.userName
    
   }
   {
    user && user.userName.length>0 &&<div className="text-success"><GoDotFill></GoDotFill> Active</div>
   }
   {
    !user && <div className="text-danger mt-4" style={{textAlign:"center"}}>User Not exists </div>
   }
   <h6 className="mt-5" style={{color:"#878a92",content:"justify",fontSize:"14px"}}>
   If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
   </h6>
</div>

<div className="profile-setting-scroll-container">
                <SimpleBar style={{ maxHeight: "100%" }} className="user-profile-desc">
                    <div id="profile-setting-accordion" className="custom-accordion bg-link">
                        <Card className="shadow-none border mb-2 ">
                            <Collapses 
                                title={<span className="custom-collapse-title " > <i className="ri-user-2-line"></i> About <FaChevronDown className="float-end"></FaChevronDown></span>}
                                isOpen={isOpen1}
                                toggleCollapse={toggleCollapse1}
                            >
                                <div className="card-body">
                                    <div className="float-end">
                                        <Button color="light" size="sm" type="button" ><i className="ri-edit-fill me-1 align-middle"></i> {t('Edit')}</Button>
                                    </div>

                                    <div>
                                        <p className="text-muted mb-1">{t('Name')}</p>
                                        {user && user.userName}
                                    </div>

                                    <div className="mt-1">
                                        <p className="text-muted mb-1">{t('Email')}</p>
                                        {user && user.email}
                                    </div>

                                    <div className="mt-1">
                                        <p className="text-muted mb-1">{t('Time')}</p>
                                        <div className="font-size-10">{t('11:40 AM')}</div>
                                    </div>

                                    <div className="mt-1">
                                        <p className="text-muted mb-1">{t('Location')}</p>
                                        <div className="font-size-10 mb-0">{t('California, USA')}</div>
                                    </div>
                                </div>
                            </Collapses>
                        </Card>
                       
</div>
</SimpleBar>
</div>
<div style={{ position: "absolute", float: "top", top: -1, left:383,width:"871px" }}>
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
export default Profile;