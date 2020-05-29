import React, {Component} from 'react';
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default class Home extends Component{
    render(){
        return(
            <>
                <Banner
                    title={'luxurious rooms'}
                    subtitle={'deluxe rooms starting at $299'}
                    redirectText={'our rooms'}
                    redirectPath={'/rooms'}
                />
                <Services/>
                <FeaturedRooms/>
            </>
        )
    }
}