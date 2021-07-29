import { useState, useEffect } from 'react';
import Layout from '../Layout';
import Card from './CardForActivityDetails';
//import CheckBox from './CheckBox';
//import RadioBox from './RadioBox';
//import { showError, showSuccess } from '../../utils/messages';
//import { getCategories, getProducts, getFilteredProducts } from '../../api/apiProduct';
import { getActivityWithDetails } from '../../api/apiUsers';
import { isAuthenticated, userInfo } from '../../utils/auth';

const AllDetails = () => {
    const [details, setDetails] = useState([]);
    

    useEffect(() => {
        getActivityWithDetails()
        
            .then(response => setDetails(response.data))
            .catch();
    }, [])

    return (
        <Layout title="Home Page" className="container-fluid">
            <div>
                <a href="/create/detail">Go to create details</a> <br/>
            </div>
            <div style={{ width: "100%" }}>
                
            </div>
            <div className="row">
           
                {details && details.map(detail => <Card detail={detail} key={detail._id}
                    />)}
                   
            </div> 
        </Layout>
    )
}

export default AllDetails;