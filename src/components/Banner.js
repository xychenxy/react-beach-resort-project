import React from 'react';
import {Link} from "react-router-dom";
export default function Banner({children, title, subtitle}){
    return (
        <div className='container-fluid'>
            <div className="row banner justify-content-center align-items-center">
                <div className="col-10 mx-auto col-md-8 text-center banner-content text-capitalize">
                    <h1>{title}</h1>
                    <div />
                    <p>{subtitle}</p>
                    {children}
                    <Link to='/rooms' className='btn btn-primary text-uppercase'>our rooms</Link>
                </div>
            </div>
        </div>

    )
}