import React, {userState, useEffect, useState} from 'react';
import Layout from '../Layout';
import { getUserDetails, updateProfile } from '../../api/apiUsers'
import { userInfo } from '../../utils/auth';

const UniqueUser = () => {
    let str = window.location.href;
    const myArr = str.split('/');
    const [values, setValues] = useState({
        _id: '',
        name: '',
        email: '',
        batchNo: '',
        BMDCregNo: '',
        phoneNo: '',
        bloodGroup: '',
        ChamberName: '',
        Designation: '',
        Address: '',
        TransactionID: '',
        role: '',
        UserType: '',
        UserStatus: '',
        timeRemain: ''
    });
    const [disabled, setDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const {
        _id,
        name,
        email,
        batchNo,
        BMDCregNo,
        phoneNo,
        bloodGroup,
        ChamberName,
        Designation,
        Address,
        TransactionID,
        role,
        UserType,
        UserStatus,
        timeRemain,
    } = values;

    useEffect(() => {
        
        getUserDetails(myArr[4])
        
            .then(response => setValues(response.data))
            .catch(err => {

            })
    }, []);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        
        updateProfile(userInfo().token, values)
            .then(response => {
                if(response.status === 200){
                setRedirect(true);
                alert("Information Updated!")
                }
            })
            .catch(err => setDisabled(false));
    }

    var d = {timeRemain};
    const finish = d.timeRemain.split('-');
    let finishYear = `${parseInt(finish[0])+1}-${finish[1]}-${finish[2]}`;
    

    const profileForm = () => (<form onSubmit={handleSubmit}>
        <h3 style={{textStyle: 'bold'}}>User ID: {_id}</h3>
        <h3 style={{color: 'red'}}>Transaction ID: {TransactionID}</h3>
        <h3 style={{color: '#808080'}}>Registration Date: {timeRemain}  </h3>
        <h3 style={{color: '#808080'}}>Registration End Date: {finishYear}  </h3>
        <h3 style={{color: '#808080'}}>User Status: {UserStatus}  </h3>
        <label className="text-muted">Update User Status: </label>
        <select name= "UserStatus" 
        onChange={handleChange} className="form-control">
                <option>Update User Status</option>
                <option value="In review">In review</option>
                <option value="Active">Active</option>
                <option value="Renew">Renew</option>
        </select>

        <label className="text-muted">Name: </label>
        <input type="text" name="name" value={name} required className="form-control" onChange={handleChange} />

        <label className="text-muted">Email: </label>
        <input type="email" name="email" value={email} required className="form-control" onChange={handleChange} />

        <label className="text-muted">bloodGroup: </label>
        <input type="text" name="bloodGroup" value={bloodGroup} required className="form-control" onChange={handleChange} />
        <br/>
        <h3 style={{color: '#808080'}}>Role: {role}  </h3>
        <label className="text-muted">Update Role: </label>
        <select name="role" 
        onChange={handleChange} className="form-control">
                <option>Update role</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
        </select>
        <br/>
        <h3 style={{color: '#808080'}}>User Type: {UserType}  </h3>
        <label className="text-muted">Update User Type: </label>
        <select name="UserType" 
        onChange={handleChange} className="form-control">
                <option>Update User Type</option>
                <option value="Life Member">Life Member</option>
                <option value="General Member">General Member</option>
        </select>
        <br/>
       
        <label className="text-muted">Phone No: </label>
        <input type="number" name="phoneNo"  value={phoneNo} required className="form-control" onChange={handleChange} />

        <br/>

        <label className="text-muted">Batch No: </label>
        <input type="text" name="batchNo" value={batchNo} required className="form-control" onChange={handleChange} />

        <label className="text-muted">BMDC registration No: </label>
        <input type="text" name="BMDCregNo" value={BMDCregNo} required className="form-control" onChange={handleChange} />
        
        <label className="text-muted">Chamber Name: </label>
        <input type="text" name="ChamberName" value={ChamberName} required className="form-control" onChange={handleChange} />

        <label className="text-muted">Designation: </label>
        <input type="text" name="Designation" value={Designation} required className="form-control" onChange={handleChange} />

        <label className="text-muted">Address: </label>
        <input type="text" name="Address" value={Address} required className="form-control" onChange={handleChange} />
        <br />
        <button type="submit" className="btn btn-primary btn-sm" disabled={disabled}>Update Information</button>
    </form>)

    return (<>
        <Layout title="Profile" description="Doctor's Profile" className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <a href="/admin/dashboard">Go to Dashboard</a> <br />
                            <a href="/allusers">Go to AllUsers</a>
                        <div className="card mb-5" style={{height: 'auto'}}>
                            
                            <div className="card-header">Details</div>
                                <div className="card-body">
                                    {profileForm()}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>);
}

export default UniqueUser;

