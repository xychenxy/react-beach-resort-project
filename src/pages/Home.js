import React, {Component} from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <>
                <Hero/>
                <Banner
                    title={'luxurious rooms'}
                    subtitle={'deluxe rooms starting at $299'}
                />


            </>
        )
    }
}