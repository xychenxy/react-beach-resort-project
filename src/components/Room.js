import React from 'react';
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'

export default function Room({room}){
    const {name, slug, images, price} = room;
    return (
        <div className="card room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" className='card-img-top'/>
                <div className="price-top">
                    <h6 className='mt-3'>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <div className="card-body  text-capitalize ">
                <p className="room-info">{name}</p>
            </div>
        </div>


    )
}