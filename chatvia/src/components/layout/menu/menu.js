
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './menu.css';
 import { setUserDataInCookie } from '../../../services/storage.service';
 import { store } from '../../../services/redux-storage.service';
 import { NavLink } from 'react-router-dom';
// export function Menu(){
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//         // Toggle dark mode class on the body element
//         document.body.classList.toggle('dark-mode', !isDarkMode);
//     };

   
//     return(

// <div>
//     <div class="row">
//         <div class="col-sm-auto bg-light sticky-top">
//             <div class="d-flex flex-sm-column flex-row  bg-light">
//             <Link to="/profile"class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none ">
//             <img src={require("../../../assets/images/logo.jpg")} alt="logo" height="30"></img>
//                 </Link>
//                 <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
//                     <li className="nav-item">
//                     <Link to="/profile"class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none ">
//                 <i className="ri-user-2-line h4"></i>
//                 </Link>
//                     </li>
//                     <li class="nav-item">
//                         <Link to="/avinash"class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none ">
//                             <i class="ri-message-3-line h4"></i>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/groups"class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none " >
//                             <i class="ri-group-line h4"></i>
//                         </Link>
//                     </li>
//                     <li>
//                         < Link to="/view" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none ">
//                             <i class="ri-contacts-line h4"></i>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/setting"class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none ">
//                         <i class="ri-settings-3-line float-end  h4"></i>

//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none ">
//                             <i class="ri-global-line float-end  h4"></i>
//                         </Link>
//                     </li>
//                     <li>
                    
//            <Link class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none "  >
//                             <i class="ri-sun-line theme-mode-icon h4 "onClick={toggleDarkMode}>
//                             {isDarkMode ? '' : ''}
//                             </i>
//                         </Link>   
//                     </li>
//                 </ul>
               
//                     <div class="dropdown">
//                     <Link to="" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
//                     <Link to="/profile" aria-haspopup="true" class="nav-link mb-2" aria-expanded="false"><img src={require("../../../assets/images/prof.jpg")} height="50"alt="" class="profile-user rounded-circle"/>

//                     </Link>
//                     </Link>
//                     <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                       
//                         <li><a class="dropdown-item" href="#">Profile</a></li>
//                        <li><a tabindex="0" role="menuitem" class="dropdown-item">Settings <i class="ri-settings-3-line float-end text-muted"></i></a></li>
                       
// <a href="/login" tabindex="0" role="menuitem" class="dropdown-item" onClick={() => {
//                         Logout()}}>Log out <i class="ri-logout-circle-r-line float-end text-muted"></i></a></ul></div>
                    
                    
                
            
            
//         </div>
//     </div></div>
//     </div>

//     )
// }
// export default Menu;

export function Menu(){
    const [isDarkMode, setIsDarkMode] = useState(false);
 const navigate=useNavigate();
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
        document.body.classList.toggle('light-mode', isDarkMode);
    };
    function Logout(){
        setUserDataInCookie(null);
        let action={type:"userdata",data:null};
        store.dispatch(action);
        
       }
       function navigateLogin(){
        navigate("/login");
       }
    return(
        <div>
           <div className="side-menu col-lg-1 col-sm-12">
            <div className="mt-3 ms-3" style={{textAlign:"center"}}>
<NavLink to="/profile"> <img src={require("../../../assets/images/logo.jpg")} alt="logo" height="30"></img></NavLink>
</div> 
           <ul className="mt-5" style={{listStyle:"none"}}>
           <NavLink to="/profile" style={{textDecoration:"none"}}> <li  style={{height:"56px",color:"#878a92"}}>
            <i className="ri-user-2-line"></i>  
            </li></NavLink> 
            <NavLink to="/avinash"  style={{textDecoration:"none"}}> <li className="mt-3"  style={{height:"56px",color:"#878a92"}}>
            <i className="ri-message-3-line mt-4"></i>
            </li></NavLink>
            <NavLink to="/groups"  style={{textDecoration:"none"}}>   <li className="mt-3"  style={{height:"56px",color:"#878a92"}}>
            <i class="ri-group-line"></i>
            </li></NavLink>
            <NavLink to="/view"  style={{textDecoration:"none"}}>   <li  className="mt-3" style={{height:"56px",color:"#878a92"}}>
            <i class="ri-contacts-line"></i>
            </li></NavLink>
            <NavLink to="/setting"  style={{textDecoration:"none"}}>   <li className="mt-2"  style={{height:"56px",color:"#878a92"}}>
            <i class="ri-settings-3-line"></i> 
            </li></NavLink>
            <NavLink to=""  style={{textDecoration:"none"}}>   <li className="mt-3" style={{height:"56px",color:"#878a92"}}>
            <i class="ri-global-line"></i>
            </li></NavLink>
            <NavLink to=""  style={{textDecoration:"none"}}>    <li className="mt-3" style={{height:"56px",color:"#878a92"}}>
            <i className={isDarkMode ? "ri-moon-line theme-mode-icon h4" : "ri-sun-line theme-mode-icon h4"} id="light-dark" onClick={toggleDarkMode}></i>
            </li></NavLink>
            <li className="mt-2"  style={{height:"56px"}}>
            <div class="dropdown">
                    <Link to="" class="d-flex align-items-center link-dark text-decoration-none " id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link to="/profile" aria-haspopup="true" class="nav-link mb-2" aria-expanded="false"><img src={require("../../../assets/images/prof.jpg")} height="30"alt="" class="profile-user rounded-circle"/>

                    </Link>
                    </Link>
                    <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                       
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                       <li><a tabindex="0" role="menuitem" class="dropdown-item">Settings <i class="ri-settings-3-line text-muted"></i></a></li>
                       
<a href="/login" tabindex="0" role="menuitem" class="dropdown-item" onClick={() => {
                        navigateLogin()}}>Log out <i class="ri-logout-circle-r-line "></i></a></ul></div>
                    
            </li>
           </ul>
           
        
           
           
           </div>
        </div>
    )
}
export default Menu;