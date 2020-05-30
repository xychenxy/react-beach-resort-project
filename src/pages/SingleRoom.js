import React, {Component} from 'react';
import defaultBcg from "../images/room-2.jpeg";
import { RoomContext } from "../context";
import Banner from "../components/Banner";


export default class SingleRoom extends Component{

    state = {
        slug: this.props.match.params.slug,
        defaultBcg
    }

    static contextType = RoomContext;

    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        const {defaultBcg} = this.state
        if(!room){
            let notFoundRoomBanner = {
                backgroundImage:`url(${defaultBcg})`,
                minHeight: '60vh',
                backgroundPosition:'center',
                backgroundAttachment:'fixed',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'
            }
            return (
                <Banner
                    style={notFoundRoomBanner}
                    title={'no such room could be found...'}
                    redirectText={'back to rooms'}
                    redirectPath={'/rooms'}
                />
            );
        }


        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [mainImg, ...defaultImg] = images;
        let singleRoomBanner = {
            backgroundImage:`url(${mainImg?mainImg:defaultImg})`,
            minHeight: '60vh',
            backgroundPosition:'center',
            backgroundAttachment:'fixed',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }

        return(
            <>
                <Banner
                    style={singleRoomBanner}
                    redirectText={'back to rooms'}
                    redirectPath={'/rooms'}
                />

                <div className="container py-5">
                    <div className="row mb-5">
                        {defaultImg.map((item, index) => {
                            return (
                                <div className="col-10 mx-auto my-3 col-md-4 justify-content-center" key={index}>
                                    <img  src={item} alt={name} className='img-fluid'/>
                                </div>
                            );
                        })}
                    </div>

                    <div className="row mb-5">
                        <div className="col-10 mx-auto col-md-6 pr-md-5">
                            <h3 className="text-capitalize font-weight-bold mb-4">Details</h3>
                            <p>{description}</p>
                        </div>
                        <div className="col-10 mx-auto col-md-6 text-capitalize">
                            <h3 className="text-capitalize font-weight-bold mb-4">Info</h3>
                            <h6 className='mb-3'><strong>price</strong> : ${price}</h6>
                            <h6 className='mb-3'><strong>size</strong> : ${size} SQFT</h6>
                            <h6 className='mb-3'>
                                <strong>max capacity</strong> :{" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
                            </h6>
                            <h6 className='mb-3'><strong>{pets ? "pets allowed" : "no pets allowed"}</strong></h6>
                            <h6 className='mb-3'><strong>{breakfast && "free breakfast included"}</strong></h6>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col mx-auto">
                            <h3 className="text-capitalize font-weight-bold mb-4">extras</h3>
                            <ul className="extras">

                            </ul>
                            <ul className="list-group">
                                {extras.map((item, index) => {
                                    return <li className="list-group-item " key={index}> - {item}</li>;
                                })}

                            </ul>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}