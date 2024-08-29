import React from "react";
import Register1 from "../registration/register/register1";
import { getRegister } from "../../services/product.service";
export class Myprofile extends React.Component{
     constructor(props){
        super(props);
        this.state={
         
            profile:[],
        }
     }

     
     componentDidMount(){
        this.getRegisters();
     }
     async getRegisters(){
     
      
        let response=await getRegister();
        this.setState({
            profile:response.data
        });
      

     }
     render(){
     
        return(
           <div>
<div className="flex">
   {
    // this.state.profile && this.state.profile.map((profile)=>
    // <Register id={profile.id} email={profile.email} userName={profile.userName} password={profile.password}>
       
    // </Register>
    <div>
    
       { this.state.profile.map((profile)=>(
        <div>
            {profile.userName}
        </div>
       ))}
    </div>

   }
   
</div>

           </div> 
        )

     }
}

export default Myprofile;