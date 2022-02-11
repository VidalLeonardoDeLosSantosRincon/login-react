import { Fragment } from "react";
import { useState } from "react";
import "./style.css";

export const Login = () => {
    const [ loginForm, setLoginForm ] = useState({email:"", password:""});
    const {email, password} = loginForm;

    const onchangeForm = (e) =>{
        let _target = e.target;
        if(!_target) return null;
        setLoginForm({...loginForm, [_target.name]: _target.value});
    }

    return (
        <Fragment>
            <div className="ctr_login">
                <form id="form_login" action="#" autoComplete="off">                    
                    <h4>Email: {email}</h4>
                    <h4>Password: {password}</h4>
                    <input className="_fields" type="email" name="email" 
                        placeholder="email" required
                        onChange={onchangeForm}/>
                    <input className="_fields" type="password" name="password" 
                        placeholder="password" required
                        onChange={onchangeForm}/>
                    <button id="btn_save">Save</button>
                </form>
            </div>
        </Fragment>
    );
};