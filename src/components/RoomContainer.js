
import React from 'react';
import RoomFilter from "./RoomFilter";
import {RoomConsumer} from "../context";
import Loading from "./Loading";
import RoomList from "./RoomList";


export default function RoomContainer(){

    return (
        <RoomConsumer>
            {
                value=>{
                    const {loading, sortedRooms, rooms} = value;
                    if (loading){return <Loading/>}
                    return (
                        <>
                            <RoomFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms} />
                        </>
                    )
                }
            }
        </RoomConsumer>
    )
}