import React, {Component} from 'react';
import RoomBanner from "../components/RoomBanner";
export default class Rooms extends Component{
    render(){
        return(
            <>
                <RoomBanner
                    title="our rooms"
                    redirectText='return home'
                    redirectPath='/'>
                </RoomBanner>

            </>
        )
    }
}