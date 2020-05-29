import React, {Component} from 'react';
import Banner from "../components/Banner";
export default class Error extends Component{
    render(){
        return(
            <Banner title="404" subtitle='page not found' redirectText='return home' redirectPath='/'>
            </Banner>
        )
    }
}