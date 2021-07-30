import { useState, useEffect } from 'react';
import Layout from '../Layout';
import Card from './Card';
//import CheckBox from './CheckBox';
//import RadioBox from './RadioBox';
//import { showError, showSuccess } from '../../utils/messages';
//import { getCategories, getProducts, getFilteredProducts } from '../../api/apiProduct';
import { getUsers } from '../../api/apiUsers';
import { isAuthenticated, userInfo } from '../../utils/auth';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        getUsers()
        
            .then(response => setUsers(response.data))
            .catch();
    }, [])

    return (
        <Layout title="All " className="container-fluid">
            
            <div style={{ width: "100%" }}>
                
            </div>
            <div className="row">
                {users && users.map(user => <Card user={user} key={user._id}
                    />)}
            </div>
        </Layout>
    )
}

export default AllUsers;