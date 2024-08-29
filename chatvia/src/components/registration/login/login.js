import { NavLink}  from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserDataInCookie} from "../../../services/storage.service";
import { checkUser } from "../../../services/login.service";
import { FaHeart } from "react-icons/fa";
import './login.css';
import { useForm } from "react-hook-form";
import { store } from "../../../services/redux-storage.service";
export function Login() {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();
    const navigate =useNavigate();
   

    const [showEmailPasswordErrMsg, setShowEmailPasswordErrMsg]=useState(false);

 async function checkLoggedInUser(data){
    let formData=new FormData();
    formData.append("email",data.email);
    formData.append("password",data.password);


    let res=await checkUser(formData);
    
    if(res.data[0]!==undefined){
        setShowEmailPasswordErrMsg(false);
        setUserDataInCookie(res.data[0]);
       // alert(JSON.stringify(res.data[0]));
        let action={type:"userdata",data:res.data[0]};
        store.dispatch(action);
        navigate("/profile");
}

else{
    setShowEmailPasswordErrMsg(true);

}

 }
 

    return(
       
        <div id="log">
            
            <div className="mt-5" style={{"text-align":"center"}}>
            <h2 >Sign in</h2>
            <div className="text-muted">
            Sign in to continue to Chatvia.
            </div>
            </div>
    
            <div className="container">
            <form onSubmit={handleSubmit((data) => checkLoggedInUser(data))}>
            {
                showEmailPasswordErrMsg===true&&<div className="text-danger">Incorrect email/password</div>
            }
        <div className="mb-3">
                            <label className="form-label" style={{color:"#7a7f9a"}}>Email</label>
                            <div className="input-group bg-soft-light rounded-3 mb-3">
                                <span className="input-group-text text-muted"><i className="ri-mail-line"></i></span>
                                <input class="email" id="email" placeholder="Enter Email" type="text" className="form-control form-control-lg bg-soft-light border-light"
                             style={{height: "38px", fontSize: "14px"}}  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                              />
                               
                                
                            </div>
                            {
                errors.email && errors.email.type==="required" && <div className="text-danger">* Email Required</div> 
                }
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label" style={{color:"#7a7f9a"}}>Password</label>
                            <div className="input-group bg-soft-light rounded-3 mb-3">
                                <span className="input-group-text text-muted"><i className="ri-lock-2-line"></i></span>
                                <input class="password"  placeholder="Enter Password" type="password" className="form-control form-control-lg bg-soft-light border-light"
                             style={{height: "38px", fontSize: "14px"}}    
                             {...register('password', { required: true })}   />
                               

                            </div>

                                {errors.password && errors.password.type === "required" && <div className="text-danger">Required</div>}


                        </div>
                        <div>
                            <button type="submit" className="btn btn-none d-block text-light" style={{backgroundColor:"#6159cb",width:"100%"}}>Login</button>
                        </div>
                        </form>
                        <div className="mt-5 text-center">
                    <p>Dont have an account? <NavLink className="font-weight-medium" to="/register1">Register</NavLink></p>
                    <p>©️ 2024 Chatvia. Crafted with &nbsp;<FaHeart style={{color:"red",fontSize:'13px'}}></FaHeart>&nbsp; by Themesbrand</p>
                </div>
        </div>
        </div>
    
    )
}
export default Login;
