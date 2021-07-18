import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { showError, showSuccess, showLoading } from '../../utils/messages';
import {getActivity, createDetail } from '../../api/apiAdmin';
import { userInfo } from '../../utils/auth';

const CreateDetail = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        activities: [],
        activity: '',
        loading: false,
        error: false,
        success: false,
        disabled: false,
        formData: '',
    });

    const {
        name,
        description,
        activity,
        activities,
        loading,
        error,
        success,
        formData,
        disabled
    } = values;

    useEffect(() => {
        getActivity()
            .then(response => {
                setValues({
                    ...values,
                    activities: response.data,
                    formData: new FormData()
                })
            })
            .catch(error => {
                setValues({
                    ...values,
                    error: "Failed to load activities!",
                    formData: new FormData()
                })
            })
    }, [])

    const handleChange = (e) => {
        const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value);
        setValues({
            ...values,
            [e.target.name]: value,
            error: false,
            success: false,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true,
            disabled: true,
            success: false
        })
        const { token } = userInfo();
        createDetail(token, formData)
            .then(response => {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    activity: '',
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

    }

    const detailForm = () => (
        <form className="mb-3" onSubmit={handleSubmit}>
            <h4>Photo:</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                        
                    />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name:</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={name}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Description:</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                    value={description}
                    
                />
            </div>
           
            
            <div className="form-group">
                <label className="text-muted">activity :</label>
                <select name="activity" value={activity} onChange={handleChange} className="form-control" required>
                    <option value="">----Select activity----</option>
                    {activities && activities.map(item => (
                        <option value={item._id} key={item._id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-outline-primary" type="submit" disabled={disabled}>Create Details</button>
        </form>
    );

    const goBack = () => (<div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning">Go to Dashboard</Link>
    </div>)


    return (
        <Layout title="Add a new details">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError(error, error)}
                    {showLoading(loading)}
                    {showSuccess(success, 'Details Added Successfully!')}
                    {detailForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );

}

export default CreateDetail;