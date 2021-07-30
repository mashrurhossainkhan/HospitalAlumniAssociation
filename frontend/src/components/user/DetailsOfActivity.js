import React, { useState, useEffect } from 'react';
import { details } from '../../api/apiUsers'
import Layout from '../Layout';
import '../admin/style/style.css'
import {API} from '../../utils/config'


const DetailsOfActivity = () => {
    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }

    let str = window.location.href;
    const myArr = str.split('/');
    const [values, setValues] = useState([{}]);
    useEffect(() => {   
        details(myArr[myArr.length - 1])
            .then(response => {
                setValues(response.data);
            })
                
                
            .catch(err => alert(err))
    }, []);
  
    return (
        <Layout title="Profile" description="Doctor's Profile" className="container-fluid">

                {[values && values.map(value =>
                <div className="col-md-12 col-sm-12 col-xs-12 mb-12">
            <div className="card">
               
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <img className="center" src={`${API}/detail/photo/${value._id}`}/>
                        <p style={{titleStyle}} style={{color: "black"}}>{value.description}</p>
                        <p style={{titleStyle}} style={{color: "red"}}>{value.name}</p>
                    </div>
                    
                </div>
                
            </div>
            <br/><br/>
        </div>
        )]}                      
            
        
        </Layout>
    )
}

export default DetailsOfActivity;