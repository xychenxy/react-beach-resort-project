import React from 'react';
import {Link} from "react-router-dom";
export default function RoomBanner({children, title, subtitle, redirectText, redirectPath}){
    return (
        <div className='container-fluid'>
            <div className="row room-banner justify-content-center align-items-center">
                <div className="col-10 mx-auto col-md-8 text-center banner-content text-capitalize">
                    <h1>{title}</h1>
                    <div />
                    <p>{subtitle}</p>
                    {children}
                    <Link to={redirectPath} className='btn btn-primary text-uppercase'>{redirectText}</Link>
                </div>
            </div>
        </div>

    )
}