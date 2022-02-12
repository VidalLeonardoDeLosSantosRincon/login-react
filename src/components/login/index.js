import { Fragment } from "react";
import { useState } from "react";
import "./style.css";

//store redux 
import {connect} from "react-redux";

const LoginForm = ({login, dispatch}) => {
    const [ loginForm, setLoginForm ] = useState(login);
    const {email, password} = loginForm;

    const onchangeForm = (e) =>{
        let _target = e.target;
        if(!_target) return null;
        setLoginForm({...loginForm, [_target.name]: _target.value});
    }

    const logUser = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type:"LOG_USER", payload: loginForm});
    }

    return (
        <Fragment>
            <div className="ctr_login">
                <form id="form_login" action="#" autoComplete="off" medthod="POST">                    
                    <h4>Email: {email}</h4>
                    <h4>Password: {password}</h4>
                    <input className="_fields" type="email" name="email" 
                        placeholder="email" required
                        onChange={onchangeForm}/>
                    <input className="_fields" type="password" name="password" 
                        placeholder="password" required
                        onChange={onchangeForm}/>
                    <button id="btn_save" onClick={logUser}>Save</button>
                </form>
            </div>
        </Fragment>
    );
};

const mapStateToprops = (state, ownPrps) =>{
    //console.log('mapStateToProps', state);
    //console.log('ownProps', ownPrps);
    return {
        login: state.loginReducer
    }
};

const mapDispatchToProps = () => {

};

export const Login = connect(mapStateToprops)(LoginForm);
