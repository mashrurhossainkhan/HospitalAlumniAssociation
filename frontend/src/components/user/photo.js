import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { showError, showSuccess, showLoading } from '../../utils/messages';
import {createPhoto, getPhoto } from '../../api/apiAdmin';
import { userInfo } from '../../utils/auth';
import {API} from '../../utils/config'
import unnamed from '../img/image/unnamed.jpg'

const Photo = () => {
    const [values, setValues] = useState({
        user_id: '',
        loading: false,
        error: false,
        success: false,
        disabled: false,
        formData: '',
    });

    const {
        user_id,
        loading,
        error,
        success,
        formData,
        disabled
    } = values;

    useEffect(() => {
                setValues({
                    ...values,
                    user_id: userInfo._id,  
                    formData: new FormData()
                })
            
    }, [])

   /* const handleChange = (e) => {
        const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value);
        console.log(e.target.value);
        formData.set(userInfo()._id, "user_id");
        setValues({
            ...values,
            user_id: userInfo()._id,
            [e.target.name]: value,
            error: false,
            success: false,
        })
    }*/

    const handleSubmit = (e) => {
        const value1 = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
        //console.log(value1);
        e.preventDefault();
        setValues({
            ...values,
            user_id: userInfo()._id,
            error: false,
            loading: true,
            disabled: true,
            success: false
        })
        const { token } = userInfo();

        var formData1 = new FormData();
        formData1.append("photo",value1);
        formData1.append( "user_id", userInfo()._id);

        createPhoto(token, formData1)
            .then(response => {
                setValues({
                    ...values,
                    user_id: '',
                    loading: false,
                    disabled: false,
                    success: true,
                    error: false
                })
                
            })
            
            .catch(error => {
                let errMsg = "Something went wrong!";
                if (error.response) errMsg = error.response.data;
                setValues({
                    ...values,
                    error: errMsg,
                    loading: false,
                    success: false,
                    disabled: false
                })
            })
            window.location.reload();
    }

    const detailForm = () => (
        
                <input
                        type="file"
                        name="photo"
                        onChange={handleSubmit}
                        accept="image/*"
                        
                    />     
    );

 

    return (
      
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError(error, error)}
                    {showLoading(loading)}
                    {showSuccess(success, 'Photo Added Successfully!')}
                    
                     <img src={`${API}/user/photos/${userInfo()._id}`} alt="Upload a Photo" onError={(e)=>{e.target.onerror = null; e.target.src="data:image/png;base64,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"}} height = "600px" width = "600px"/>
                    <br/>
                    <div>
                    {detailForm()}
                    </div>
                 
                </div>
            </div>
     
    );

}

export default Photo;