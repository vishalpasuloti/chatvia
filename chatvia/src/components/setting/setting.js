import React, { useState, useContext } from 'react';

import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Card, Button, UncontrolledDropdown, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import { useTranslation } from 'react-i18next';
import "../setting/setting.css"; // Import the CSS file
import Collapses from '../collapses/collapses';
import { UserContext } from '../../services/usercontext.service';
import { FaChevronDown } from 'react-icons/fa';
export function Setting(props) {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    /* intilize t variable for multi language implementation */
    const { t } = useTranslation();

    const toggleCollapse1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
    };
    const toggleCollapse2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen3(false);
        setIsOpen4(false);
    };

    const toggleCollapse3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen4(false);
    };

    const toggleCollapse4 = () => {
        setIsOpen4(!isOpen4);
        setIsOpen1(false);
        setIsOpen3(false);
        setIsOpen2(false);
    };

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
        <React.Fragment>
        <div className="setting-container bg-light">
            <div className="px-4 pt-4">
                <h4 className="mb-0">{t('Settings')}</h4>
            </div>

            <div className="text-center border-bottom p-4">
                <div className="mb-4 profile-user">
                    <img src={require("../../assets/images/doris.jpg")} width="100" className="rounded-circle avatar-lg img-thumbnail" alt="chatvia" />
                    <div style={{ textAlign: "center" }}>
                        {user && user.userName}
                        <i style={{ cursor: "pointer" }}>
                            <i className="bi bi-pen" ></i>
                        </i>
                        {user && user.userName.length > 0 && <div className="text-success"><GoDotFill /> Active</div>}
                        {!user && <div className="text-danger mt-4" style={{ textAlign: "center" }}>User Not exists </div>}
                    </div>
                </div>

                <Dropdown isOpen={false} toggle={toggle} className="d-inline-block mb-1">
                    <DropdownToggle tag="a" className="text-muted pb-1 d-block" >
                        {/* {t('Available')} <i className="mdi mdi-chevron-down"></i> */}
                    </DropdownToggle>

                    <DropdownMenu>
                        {/* <DropdownItem>{t('Available')}</DropdownItem> */}
                        <DropdownItem>{t('Busy')}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="profile-setting-scroll-container">
                <SimpleBar style={{ maxHeight: "100%" }} className="user-profile-desc">
                    <div id="profile-setting-accordion" className="custom-accordion">
                        <Card className="shadow-none border mb-2">
                            <Collapses
                                title={<span className="custom-collapse-title"><i className="fa fa-chevron-down"></i> Personal Info <FaChevronDown className="float-end"></FaChevronDown></span>}
                                isOpen={isOpen1}
                                toggleCollapse={toggleCollapse1}
                            >
                                <div className="card-body">
                                    <div className="float-end">
                                        <Button color="light" size="sm" type="button" ><i className="ri-edit-fill me-1 align-middle" onClick={() => { navigate('/editprofile/' + user.id); }}></i> {t('Edit')}</Button>
                                    </div>

                                    <div>
                                        <p className="text-muted mb-1">{t('Name')}</p>
                                        {user && user.userName}
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted mb-1">{t('Email')}</p>
                                        {user && user.email}
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted mb-1">{t('Time')}</p>
                                        <span className="font-size-10">{t('11:40 AM')}</span>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted mb-1">{t('Location')}</p>
                                        <span className="font-size-10 mb-0">{t('California, USA')}</span>
                                    </div>
                                </div>
                            </Collapses>
                        </Card>

                        <Card className="shadow-none border mb-2">
                            <Collapses
                                title={<span className="custom-collapse-title"><i className="bi bi-chevron-down"></i> Privacy <FaChevronDown className="float-end"></FaChevronDown></span>}
                                isOpen={isOpen2}
                                toggleCollapse={toggleCollapse2}
                            >
                                <div className="card-body">
                                    <div className="py-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="font-size-13 mb-0 text-truncate">{t('Profile photo')}</h6>
                                            </div>
                                            <UncontrolledDropdown className="ms-2">
                                                <DropdownToggle className="btn btn-light btn-sm w-sm" tag="button">
                                                    {t('Everyone')} <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem>{t('Everyone')}</DropdownItem>
                                                    <DropdownItem>{t('selected')}</DropdownItem>
                                                    <DropdownItem>{t('Nobody')}</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                    <div className="py-3 border-top">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="font-size-13 mb-0 text-truncate">{t('Last seen')}</h6>
                                            </div>
                                            <div className="ms-2">
                                                <div className="form-check form-switch">
                                                    <Input type="checkbox" className="form-check-input" id="privacy-lastseenSwitch" defaultChecked />
                                                    <Label className="form-check-label" htmlFor="privacy-lastseenSwitch"></Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 border-top">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="font-size-13 mb-0 text-truncate">{t('Status')}</h6>
                                            </div>
                                            <UncontrolledDropdown className="ms-2">
                                                <DropdownToggle className="btn btn-light btn-sm w-sm" tag="button">
                                                    {t('Everyone')} <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem>{t('Everyone')}</DropdownItem>
                                                    <DropdownItem>{t('selected')}</DropdownItem>
                                                    <DropdownItem>{t('Nobody')}</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>

                                    <div className="py-3 border-top">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="font-size-13 mb-0 text-truncate">{t('Read receipts')}</h6>
                                            </div>
                                            <div className="ms-2">
                                                <div className="form-check form-switch">
                                                    <Input type="checkbox" className="form-check-input" id="privacy-readreceiptSwitch" defaultChecked />
                                                    <Label className="form-check-label" htmlFor="privacy-readreceiptSwitch"></Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 border-top">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="font-size-13 mb-0 text-truncate">{t('Groups')}</h6>
                                            </div>
                                            <UncontrolledDropdown className="ms-2">
                                                <DropdownToggle className="btn btn-light btn-sm w-sm" tag="button">
                                                    {t('Everyone')} <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem>{t('Everyone')}</DropdownItem>
                                                    <DropdownItem>{t('selected')}</DropdownItem>
                                                    <DropdownItem>{t('Nobody')}</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                </div>
                            </Collapses>
                        </Card>

                        <Card className="shadow-none border mb-2">
                            <Collapses
                                title={<span className="custom-collapse-title">Security <FaChevronDown className="float-end"></FaChevronDown></span>}
                                isOpen={isOpen3}
                                toggleCollapse={toggleCollapse3}
                            >
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <div className="font-size-13 mb-0 text-truncate">{t('Show security notification')}</div>
                                        </div>
                                        <div className="ms-2 me-0">
                                            <div className="form-check form-switch">
                                                <Input type="checkbox" className="form-check-input" id="security-notificationswitch" />
                                                <Label className="form-check-label" htmlFor="security-notificationswitch"></Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapses>
                        </Card>

                        <Card className="shadow-none border mb-2">
                            <Collapses
                                title={<span className="custom-collapse-title">Help <FaChevronDown className="float-end"></FaChevronDown></span>}
                                isOpen={isOpen4}
                                toggleCollapse={toggleCollapse4}
                                >
                                <div className="card-body">
                                <div className="py-3">
                                <div className="font-size-5 mb-0"><Link to="#" className="text-body d-block">{t('FAQs')}</Link></div>
                                </div>
                                <div className="py-3 border-top">
                                <div className="font-size-5 mb-0"><Link to="#" className="text-body d-block">{t('Contact')}</Link></div>
                                </div>
                                <div className="py-3 border-top">
                                <div className="font-size-5 mb-0"><Link to="#" className="text-body d-block">{t('Terms & Privacy policy')}</Link></div>
                                </div>
                                </div>
                                </Collapses>
                                </Card>
                                </div>
                                </SimpleBar>
                                </div>
                                </div>
                            </React.Fragment>
                            <div style={{ position: "absolute", float: "top", top: -1, left:490,width:"841px" }}>
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
<form style={{width:'841px'}} >
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
export default Setting;