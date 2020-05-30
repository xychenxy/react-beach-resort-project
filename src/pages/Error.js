import React, {Component} from 'react';
import Banner from "../components/Banner";
import defaultBcg from "../images/defaultBcg.jpeg";
export default class Error extends Component{

    render(){

        let HomeBanner = {
            backgroundImage:`url(${defaultBcg})`,
            minHeight: 'calc(100vh - 63px)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            backgroundPosition:'center',
            backgroundAttachment:'fixed',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }

        return(
            <Banner title="404" style={HomeBanner} subtitle='page not found' redirectText='return home' redirectPath='/'>
            </Banner>
        )
    }
}