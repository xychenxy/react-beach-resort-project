import React, {Component} from 'react';
import Banner from "../components/Banner";
import defaultImg from '../images/room-2.jpeg'
import RoomContainer from "../components/RoomContainer";

export default class Rooms extends Component{
    render(){
        let notFoundRoomBanner = {
            backgroundImage:`url(${defaultImg})`,
            minHeight: '60vh',
            backgroundPosition:'center',
            backgroundAttachment:'fixed',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }
        return(
            <>
                <Banner
                    style={notFoundRoomBanner}
                    title={'our rooms'}
                    redirectText={'our rooms'}
                    redirectPath={'/rooms'}
                />
                <RoomContainer/>
            </>
        )
    }
}