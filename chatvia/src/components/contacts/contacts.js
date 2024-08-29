import React from "react";
import Register1 from "../registration/register/register1";
import { getRegister } from "../../services/product.service";
import './contact.css';
export class Contacts extends React.Component{
     constructor(props){
        super(props);
        this.state={
         
            contact:[]
        }
     }

     
     componentDidMount(){
        this.getRegisters();
     }
     async getRegisters(){
     
      
        let response=await getRegister();
        this.setState({
            contact:response.data
        });
      

     }
     render(){
     
        return(
           <div>
<div className="flex">
   {
    this.state.contact && this.state.contact.map((register)=>
    <Register1 id={register.id} email={register.email} userName={register.userName} password={register.password}>
       
    </Register1>
)
   }
   
</div>

           </div> 
        )

     }
}