import { useState } from "react";
import Layout from "../Layout";
import '../style/style.css';
import { Redirect } from "react-router";
import {login} from '../../api/apiAuth';
import { showError, showLoading } from "../../utils/messages";
import {authenticate} from '../../utils/auth'

const Login = () => {
    const [values, setValues] = useState({
        email : '',
        password: '',
        error: false,
        loading: false,
        disabled: false,
        redirect: false
    });

    const {email, password, loading, error, redirect, disabled} = values;

    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues ({...values, error: false, loading: true, disabled: true});
        
        login ({email, password})
            .then(response => {
                authenticate(response.data.token, () => {
                    setValues({
                        email: '',
                        password: '',
                        success: true, 
                        disabled: false,
                        loading: false,
                        redirect: true
                    })
                })
            })
        .catch(err =>{
            let errMsg = 'Something Went Wrong';
            if(err.response){
                errMsg = err.response.data;
            }else{
                errMsg = 'Something Went Wrong!';
            }
            setValues({...values, error: errMsg, disabled: false, loading: false})
        })
    }
    const signInForm = () => (
      <div className="hero">
          <div className="form-box-login">
              <div className="button-box">
                  <div id="btn"></div>
                  <button type="button" className="toggle-btn">Log In</button>
                 
              </div>

              <form id = "login" className="input-group" onSubmit={handleSubmit}>
                    <input type="email" name="email" className="input-field" placeholder="Email" required onChange={handleChange}/>
                    <input type="password" name="password" className="input-field" placeholder="Password"  onChange={handleChange} required />
                    <button type="submit" class="submit-btn" disable = {disabled}>Login</button>
                    <a href="/register">create Account</a>
              </form>
          </div>
      </div>
    );

    const redirectUser = () => {
        if (redirect) return <Redirect to="/" />
    }
    return (
        <Layout title = "Login" className = "container col-md-8 offset-md-2">
            {redirectUser()}
            {showLoading(loading)}
            {showError(error, error)}
            <h3>Login here</h3>
            <hr />
            {signInForm()}
            <hr/>
        </Layout>
    );
}

export default Login;