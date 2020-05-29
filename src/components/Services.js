import React, {Component} from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component{

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }
        ]
    };

    render(){
        return(
            <div className='container-fluid py-5 services' id='services'>
                <div className="row pb-5">
                    {/*    title*/}
                    <div className="col-10 mx-auto text-center">
                        <h2 className='font-weight-bold'>Services</h2>
                        <div className='underline'/>
                    </div>
                </div>
                <div className="row mx-5">
                    {/*body*/}
                    {
                        this.state.services.map((item,key)=>{
                            return (
                                <div key={key} className="col-md-3 text-center my-3">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}