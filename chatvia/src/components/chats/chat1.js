import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export function Chat1(){
    return(
        <div aria-expanded="true" aria-hidden="false">
<div className="m-2 mt-2" style={{position:"absolute",float:"top",top:1,left:180,border:"1px solid black",width:"400px",padding:"10px",backgroundColor:"#e6ebf5"}}>
            <h4 className="m-3">Chats</h4>
            <div>
        
<div  style={{"display": "flex", "alignItems": "center"}} >
            
        
                        
                            <input type="search" style={{"border":"none","outline":"none","height":"40px",width:"600px"}}   placeholder="Search for products" />
                            <span className=""  style={{"marginLeft": "-37px"}}> <FaSearch  style={{"fontSize": "40px",  "padding": "7px","cursor":"pointer",position:"relative"}} /> </span>
                         </div>
    </div>
    <div className="list-group">
  
  <NavLink to="/avinash" className="list-group-item list-group-item-action"><a aria-haspopup="true" className="nav-link" aria-expanded="false"><img src={require("../../assets/images/prof.jpg")} height="35"alt="" className="profile-user rounded-circle"/><span className="ms-4">avinash</span></a>
<span className="ms-5">hey there im using whats app!</span>
</NavLink>
  <div>
  <NavLink to="/vishal" className="list-group-item list-group-item-action"><a aria-haspopup="true" className="nav-link" aria-expanded="false"><img src={require("../../assets/images/prof.jpg")} height="35"alt="" className="profile-user rounded-circle"/><span className="ms-4">vishal</span></a>
<span className="ms-5">hey there im using whats app!</span>
</NavLink>
  </div>
  <div>
  <a href="#" className="list-group-item list-group-item-action"><a aria-haspopup="true" className="nav-link" aria-expanded="false"><img src={require("../../assets/images/prof.jpg")} height="35"alt="" className="profile-user rounded-circle"/><span className="ms-4">Raghav</span></a>
<span className="ms-5">hey there im using whats app!</span>
</a>
  </div>
</div>
    </div>
    
    
    </div> 
        
    )
}
export default Chat1;