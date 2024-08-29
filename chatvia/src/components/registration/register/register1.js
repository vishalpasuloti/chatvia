import { NavLink, useNavigate, useParams } from "react-router-dom";
import logochatvia from "../../../assets/images/logochatvia.png"
import './register.css';
import { useForm } from "react-hook-form";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
export function Register1(){
    const navigate =useNavigate();
    const{id}=useParams();
    const[btnText,setbtnText]=useState("Register");
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } =useForm();

    async function saveData(data) {
        let formData = new FormData();
        formData.append("email", data.email);
        formData.append("userName", data.userName);
        formData.append("password", data.password);

        //alert(JSON.stringify(data));
        let options = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };

        await axios.post("http://localhost:4000/register", formData, options);
        navigate("/login");
    }
    useEffect(()=>{
        if(id!==undefined){
            getpostproperty();
        }
        },[]);
        
        
        async function getpostproperty(){
            const url="http://localhost:4000/properties/"+id;
            let response=await axios.get(url);
            let data=response.data[0];
            setValue("email", data.email);
            setValue("userName", data.userName);
            setValue("password", data.password);
            setbtnText("update User");
            
           
            
        }
            

    return(
        <div>
       <div className="mt-5" style={{textAlign:"center"}}>
       <img src={logochatvia} alt="" width="122px" height="32px"></img>
       <br/>
       <div className="mt-5">
        <h4>{btnText}</h4>
       <div className="text-muted">Get your Chatvia account now.</div>
       </div>
       </div>
       <div className="container mt-3 p-3">
       <form onSubmit={handleSubmit(saveData)}>
        <div className="mb-3">
                            <label className="form-label" style={{color:"#7a7f9a"}}>Email</label>
                            <div className="input-group bg-soft-light rounded-3 mb-3">
                                <span className="input-group-text text-muted"><i className="ri-mail-line"></i></span>
                                <input class="email" id="email" placeholder="Enter Email" type="text" className="form-control form-control-lg bg-soft-light border-light"
                             style={{height: "38px", fontSize: "14px"}}     {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                />
                               
                                
                            </div>
                            {
                errors.email && errors.email.type==="required" && <div className="text-danger">* Email Required</div> 
                }
                {
                errors.email && errors.email.type==="pattern" && <div className="text-danger">* Invalid Email</div> 
                }
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{color:"#7a7f9a"}}>UserName</label>
                            <div className="input-group bg-soft-light rounded-3 mb-3">
                                <span className="input-group-text text-muted"><i className="ri-user-2-line"></i></span>
                                <input class="text"  placeholder="Enter Username" type="text" className="form-control form-control-lg bg-soft-light border-light"
                             style={{height: "38px", fontSize: "14px"}}       {...register('userName', { required: true })}
                                />
                               <div>
                            
                               </div>

                            </div>
                            {errors.userName && errors.userName.type === "required" && <div className="text-danger">Required</div>}

                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{color:"#7a7f9a"}}>Password</label>
                            <div className="input-group bg-soft-light rounded-3 mb-3">
                                <span className="input-group-text text-muted"><i className="ri-lock-2-line"></i></span>
                                <input class="password"  placeholder="Enter Password" type="password" className="form-control form-control-lg bg-soft-light border-light"
                             style={{height: "38px", fontSize: "14px"}}       {...register('password', { required: true })}
                                />
                               <div>
                            
                               </div>

                            </div>
                            {errors.password && errors.password.type === "required" && <div className="text-danger">Required</div>}

                        </div>
                        <div>
                            <button type="submit" className="btn btn-none d-block text-light" style={{backgroundColor:"#6159cb",width:"100%"}} >{btnText}</button>
                        </div>
                        </form>
                        <div className="mt-5 text-center">
                    <p>Already have an account? <NavLink className="font-weight-medium" to="/login">Sign In</NavLink></p>
                    <p>©️ 2024 Chatvia. Crafted with &nbsp;<FaHeart style={{color:"red",fontSize:'13px'}}></FaHeart>&nbsp; by Themesbrand</p>
                </div>
       </div>
        </div>
    )
}
export default Register1;