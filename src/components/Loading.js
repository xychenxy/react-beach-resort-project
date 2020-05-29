import React from 'react';
import loadingGif from "../images/gif/loading-arrow.gif"
export default function Loading(){
    return (
        <div className='col-6 mx-auto loading text-capitalize text-center mt-3'>
            <h4>Rooms data loading</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}