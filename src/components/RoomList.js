import React from 'react';
import Room from "./Room";

export default function RoomList({rooms}){
    if (rooms.length === 0){
        return (
            <div className='container mb-5'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-10  mx-auto text-capitalize">
                        <div className="alert alert-danger  text-center" role="alert">
                            <h3>unfortunately no rooms matched your search parameters.</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container pb-5'>
            <div className="row">
                {
                    rooms.map((room, index)=>{
                        return (
                            <div className="col-10 mx-auto col-sm-6 col-md-3 my-3" key={index}>
                                <Room room={room}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}