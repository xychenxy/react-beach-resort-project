import React, {Component} from 'react';
import {RoomContext} from "../context";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component{
    static contextType = RoomContext;

    render(){
        let {loading, featuredRooms} = this.context

        return(
            <div className='container-fluid py-5 mb-5 featured-rooms' id='featured-rooms'>
                <div className="row pb-5">
                    {/*    title*/}
                    <div className="col-10 mx-auto text-center">
                        <h2 className='font-weight-bold'>Feature Rooms</h2>
                        <div className='underline'/>
                    </div>
                </div>
                <div className="row mx-5">
                    {loading? <Loading/> :
                        featuredRooms.map(room => {
                            return (<div className='col-10 mx-auto col-md-4 my-3' key={room.id}>
                                <Room room={room} />
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}