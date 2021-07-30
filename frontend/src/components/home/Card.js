import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
    console.log(user);
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
 
    return (
        <div className="col-md-3 col-sm-4 col-xs-12 mb-3">
            <div className="card">
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <p style={{titleStyle}} style={{color: "black"}}>{user}</p>
                        <p style={{titleStyle}} style={{color: "powderblue"}}>{user}</p>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Card;