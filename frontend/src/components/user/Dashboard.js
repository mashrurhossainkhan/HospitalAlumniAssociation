import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/auth';
import unnamed from '../img/image/unnamed.jpg'
import Photo  from './photo';
import { updateProfile } from '../../api/apiUsers'

const Dashboard = () => {
    const { name, email, role, Address, BMDCregNo, ChamberName, Designation, UserStatus, UserType, batchNo, bloodGroup, phoneNo, timeRemain, _id, TransactionID} = userInfo();
    const UserLinks = () => {
        return (
            <div>
            <Photo/>
            <br/><br/><br/>
            <div className="card">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">All News</Link>
                    </li>

                    
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/userprofile/${userInfo()._id}`}>Update Profile</Link>
                    </li>
                </ul>
            </div>
            </div>
        )
    };

    var d = {timeRemain};
    const finish = d.timeRemain.split('-');
    let finishYear = `${parseInt(finish[0])+1}-${finish[1]}-${finish[2]}`;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm +'-'+dd;

    
    if(finishYear <= today){
        updateProfile(userInfo().token, {_id:userInfo()._id, UserStatus: "Renew",name: name,email: email,batchNo: batchNo,BMDCregNo: BMDCregNo,phoneNo:phoneNo,bloodGroup:bloodGroup,ChamberName:ChamberName,Designation: Designation,Address: Address,role: role,UserType:UserType, TransactionID: TransactionID, timeRemain: timeRemain})
        .then(response => {
            if(response.status === 200){
                alert("Please Renew your ID!");
            }
        })
        .catch();
    }

    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">ID: {_id}</li>
                <li className="list-group-item">Name: {name}</li>
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Role: {role}</li>
                <li className="list-group-item">Address: {Address}</li>
                <li className="list-group-item">BMDC registration No: {BMDCregNo}</li>
                <li className="list-group-item">Chamber Name: {ChamberName}</li>
                <li className="list-group-item">Designation: {Designation}</li>
                <li className="list-group-item">User Status: {UserStatus}</li>
                <li className="list-group-item">User Type: {UserType}</li>
                <li className="list-group-item">Batch No: {batchNo}</li>
                <li className="list-group-item">Blood Group: {bloodGroup}</li>
                <li className="list-group-item">Phone No: {phoneNo}</li>
                <li className="list-group-item">Registration Date: {timeRemain}</li>
              
            </ul>
        </div>
    );

    const RenewNow =() =>{
        var newTransactionId = prompt("Enter Your New transaction ID: ");
    
        updateProfile(userInfo().token, {_id:userInfo()._id, UserStatus: "In Review",name: name,email: email,batchNo: batchNo,BMDCregNo: BMDCregNo,phoneNo:phoneNo,bloodGroup:bloodGroup,ChamberName:ChamberName,Designation: Designation,Address: Address,role: role,UserType:UserType,TransactionID: newTransactionId, timeRemain: today})
        .then(response => {
            if(response.status === 200){
                alert("User Status: In Review");
            }
        })
        .catch();
    }
    return (
        <Layout title="Dashboard" className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                    <li className="list-group-item">Renew Now: <button className="btn btn-success" onClick={RenewNow}>Renew</button></li>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;