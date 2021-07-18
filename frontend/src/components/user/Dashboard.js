import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/auth';
import unnamed from '../img/image/unnamed.jpg'

const Dashboard = () => {
    const { name, email, role, Address, BMDCregNo, ChamberName, Designation, UserStatus, UserType, batchNo, bloodGroup, phoneNo, timeRemain, _id} = userInfo();
    const UserLinks = () => {
        return (
            <div>
            <div className="card" style={{margin: 50}}>
                <img src={unnamed} height = "600px" width = "600px"/>
            </div>
            <div className="card">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">All News</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">Update Profile</Link>
                    </li>
                </ul>
            </div>
            </div>
        )
    };



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

    return (
        <Layout title="Dashboard" className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;