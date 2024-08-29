import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Register1 from "../registration/register/register1";
import { Contacts } from "../contacts/contacts";
import { getRegister } from "../../services/product.service";
import { FaSearch } from "react-icons/fa";
export class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      chat:[],
    };
  }

  componentDidMount() {
    this.getchats();
    
  }

  
  

  async getchats(){
    let res=await getRegister();
    this.setState({
        chat:res.data,
    })
  }
  
 

  render() {
    
    return (
      <div>
<div className="m-2 mt-2" style={{position:"absolute",float:"top",top:1,left:140,border:"1px solid black",width:"400px",padding:"10px"}}>
            <h4 className="m-3">Chats</h4>
            <div>
        
<div  style={{"display": "flex", "alignItems": "center"}} >
            
        
                        
                            <input type="search" style={{"border":"none","outline":"none","height":"40px",width:"600px"}}   placeholder="Search for products" />
                            <span className=""  style={{"marginLeft": "-37px"}}> <FaSearch  style={{"fontSize": "40px",  "padding": "7px","cursor":"pointer",position:"relative"}} /> </span>
                         </div>
    </div>  
    <h5 className="m-3">
        Recent
    </h5>
   
        
        
        <div className="">
          {this.state.chat.map((chat)=>(
            
                <div className="mt-3 mb-3">
                   {
  <NavLink to="/avinash" className="list-group-item list-group-item-action"><a aria-haspopup="true" className="nav-link" aria-expanded="false"><img src={require("../../assets/images/prof.jpg")} height="35"alt="" className="profile-user rounded-circle"/><span className="ms-4">{chat.userName}</span></a>
<span className="ms-5">hey there im using whats app!</span>
</NavLink>
  }
                 
                  
                </div>
                
              
             
          ))}
        </div>
       
       </div>
      </div>
    );
  }
}
export default Chats;
