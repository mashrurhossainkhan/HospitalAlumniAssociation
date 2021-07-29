import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/auth';
import { deleteDetails } from '../../api/apiUsers'


const Card = ({ detail }) => {

    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }
    const imgStyle = {
        height: 250,
        objectFit: "cover",
        objectPosition: "0px 0px"
    }
    const deleteDetailss = (user) => () => {
        console.log(user._id);
       if(!window.confirm("Delete User?")) return
       deleteDetails (userInfo().token, user)

        window.location.replace("/detail");           
    }
  
    return (
        
        <div className="col-md-3 col-sm-4 col-xs-12 mb-3">
            <div className="card">
             
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <p style={titleStyle}>{detail.activity.name}</p>
                        <p style={titleStyle}>{detail.name}</p>
                        
                    
                        <button className="btn-danger btn-outline-danger btn-sm" onClick={deleteDetailss(detail)}>Delete</button>
                    
    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;