import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";


export function Reset(){

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    
    let header = "User Reset Form";
    return(

        <div className="p-4 card-body">
            <div className="container" style={{ width: "40%" }}>
            {header}
                    <div className="p-3">
                    <div class="text-center mb-4 alert alert-success fade show" variant="success" role="alert">Enter your Email and instructions will be sent to you!</div>
                        <div className="mb-3">
                            
                            <label className="form-label">Email</label>
                            <div className="mb-3 bg-soft-light  input-group">
                                <span className="input-group-text text-muted" >
                                    <i className="ri-user-2-line"></i>
                                </span>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    type="text"
                                    className="form-control form-control-lg border-green bg-soft-light"
                                   
                                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                />
                                {
                                    errors.email && errors.email.type === "required" && <div className="text-danger">Email required</div>
                                }
                                {
                                    errors.email && errors.email.type === "pattern" && <div className="text-danger">Invalid email</div>
                                }
                            </div>
                            <div >  <button type="submit" class="waves-effect waves-light btn btn-primary d-block w-100">Reset</button></div>
                        </div>
                        </div>
                        </div>
                        </div>
    )
}