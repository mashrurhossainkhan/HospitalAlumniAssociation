import { useState } from "react";
import Layout from "../Layout";
import { showError, showLoading, showSuccess } from "../../utils/messages";
import '../style/style.css'
import { Link } from "react-router-dom";
import { register } from "../../api/apiAuth";

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        batchNo: '',
        BMDCregNo: '',
        phoneNo: '',
        bloodGroup: '',
        ChamberName: '',
        Designation: '',
        Address: '',
        password: '',
        TransactionID : '',
        error: false,
        loading: false,
        disabled: false,
        success: false
    });

    const {name, email, batchNo, BMDCregNo ,phoneNo ,bloodGroup,ChamberName,Designation,Address,password,TransactionID,success, error, loading, disabled} = values;

    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values, error: false, loading: true, disabled: true});

        register({name, email, batchNo, BMDCregNo ,phoneNo ,bloodGroup,ChamberName,Designation,Address,password,TransactionID})
        .then(response => {
           //write the success message here
           
            setValues({
                name: '',
                email: '',
                batchNo: '',
                BMDCregNo: '',
                phoneNo: '',
                bloodGroup: '',
                ChamberName: '',
                Designation: '',
                Address: '',
                password: '',
                TransactionID : '',
                success: true,
                disabled: false,
                loading: false
             })
        })
        .catch(err => {
            let errMsg = 'Something Went Wrong!';
            if(err.response) {
                errMsg = 'Something Went Wrong!';
            }else{
                errMsg = "Something Went Wrong";
            }
            setValues({...values, error: errMsg, disabled: false, loading: false})
        })
        alert("Registration Complete!");
    }

    const signUpForm = () => (
        <div className="hero">
            
        <div className="form-box">
            <div className="button-box">
                <div id="btn"></div>
                <button type="button" class="toggle-btn" onclick="register()">Register</button>
            </div>
            
        <form onSubmit={handleSubmit} id="login" className="input-group">
            <input type="text" placeholder="Your Name" name="name" className="input-field" value={name} required onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" className="input-field" value={email} required onChange={handleChange} />
            <input type="text" placeholder="Batch No." name="batchNo" className="input-field" value={batchNo} required onChange={handleChange} />
            <input type="number" placeholder="BMDC Registration No" name="BMDCregNo" className="input-field" value={BMDCregNo} required onChange={handleChange} />
            <input type="number" placeholder="Phone no" name="phoneNo" className="input-field" value={phoneNo} required onChange={handleChange} />
            <input type="text" placeholder="Blood Group (exm: A+ ve, B+ ve)" name="bloodGroup" className="input-field" value={bloodGroup} required onChange={handleChange} />
            <input type="text" placeholder="Chamber Name" name="ChamberName" className="input-field" value={ChamberName} required onChange={handleChange} />
            <input type="text" placeholder="Designation" name="Designation" className="input-field" value={Designation} required onChange={handleChange} />
            <input type="text" placeholder="Address" name="Address" className="input-field" value={Address} required onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" className="input-field" value={password} required onChange={handleChange} />
            <input type="text" placeholder="Transaction ID" name="TransactionID" className="input-field" value={TransactionID} required onChange={handleChange} />

            <button type="submit" class="btn btn-primary" disabled={disabled}>REGISTER</button>
            
                    <a href="/login" class="toggle-btn">already have Account?</a>
           
           
        </form>
  
        </div>
      </div>
      
    );
    
    return(
        <Layout title = "Register" className="container col-md-8 offset-md-2">
            {showSuccess()}
            {showLoading(loading)}
            {showError(error, error)}
            <h3>Register Here</h3>
            {signUpForm()}
            
        </Layout>
    );
}

export default Register;