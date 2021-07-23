import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../utils/config';
import unnamed from "../img/image/unnamed.jpg"

const Card = ({ user }) => {
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
                <img
                    src={unnamed}
                    alt={user.name}
                    style={imgStyle}
                    className="card-img-top"
                />
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <p style={titleStyle}>{user.name}</p>
                        <p style={titleStyle}>{user.UserStatus}</p>
                    <Link to={`/allusers/${user._id}`}>
                        <button className="btn btn-outline-warning btn-sm">View and Edit Details</button>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;