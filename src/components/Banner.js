import React from 'react';
import {Link} from "react-router-dom";
export default function Banner({ children, title, subtitle, redirectText, redirectPath, style}){
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center align-items-center' style={style}>
                <div className="col mx-auto col-md-8 text-center banner-content text-capitalize">
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