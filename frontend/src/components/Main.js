import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home'
import Register from './user/Register';
import Login from './user/login'
import PrivateRoute from '../components/protectRoutes/PrivateRoute';
import Dashboard from './user/Dashboard'
import AdminRoute from '../components/protectRoutes/AdminRoute';
import CreateActivity from './admin/CreateActivity';
import CreateDetail from './admin/CreateDetail';
import AllUsers from './admin/allUsers';
import AdminDashboard from './admin/AdminDashboard';
import UniqueUser from './admin/UniqueUser';
import AllDetails  from './admin/allDetails';
import UserProfile from './user/UserProfile';
import DetailsOfActivity from './user/DetailsOfActivity'

const Main = () => {
    return (
    <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path = "/login" exact component={Login} />
            <Route path = "/register" exact component = {Register}/>
            <Route path = "/details/:id" exact component = {DetailsOfActivity}/>
            <PrivateRoute exact path="/user/dashboard">
                <Dashboard/>
            </PrivateRoute>
            <AdminRoute exact path="/admin/dashboard">
                <AdminDashboard/>
            </AdminRoute>
            <AdminRoute exact path="/create/activity">
                <CreateActivity/>
            </AdminRoute>
            <AdminRoute exact path="/create/detail">
                <CreateDetail/>
            </AdminRoute>
            <AdminRoute exact path="/allusers">
                <AllUsers/>
            </AdminRoute>

            <PrivateRoute exact path="/userprofile/:id">
                <UserProfile/>
            </PrivateRoute>

            <AdminRoute exact path="/allusers/:id">
                <UniqueUser/>
            </AdminRoute>       
            <AdminRoute exact path="/detail">
                <AllDetails/>
            </AdminRoute>      
        </Switch>
    </div>
    )
}

export default Main;