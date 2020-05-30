import React, {Component} from 'react';
import Banner from "../components/Banner";
import defaultBcg from "../images/defaultBcg.jpeg";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default class Home extends Component{
    render(){
        let HomeBanner = {
            backgroundImage:`url(${defaultBcg})`,
            minHeight: 'calc(100vh - 63px)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',

        }
        return(
            <>
                <Banner
                    style={HomeBanner}
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