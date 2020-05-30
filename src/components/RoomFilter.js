import React, {useContext} from 'react';
import {RoomContext} from "../context";

const getUnique = (items, value) =>{
    return [...new Set(items.map(item=>item[value]))]
}

export default function RoomFilter({rooms}){
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get all rooms
    let types = getUnique(rooms, "type")
    types = ['all', ...types]

    // use for list
    types = types.map((item, index)=>{
        return (
            <option value={item} key={index}>{item}</option>
        )
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((person, index)=>{
        return (
            <option value={person} key={index}>{person}</option>
        )
    })

    return (
        <div className='container p-5'>
            <div className="row">
                {/*    title*/}
                <div className="col-10 mx-auto text-center">
                    <h2 className='font-weight-bold'>Search Rooms</h2>
                    <div className='underline'/>
                </div>
            </div>
            <div className="row">
                {/*room types*/}
                <div className="col-10 mx-auto col-md-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="type">Room Type</label>
                            <select
                                className="form-control"
                                id="type"
                                name='type'
                                value={type}
                                onChange={handleChange}
                            >
                                {types}
                            </select>
                        </div>
                    </form>
                </div>
                {/*guests*/}
                <div className="col-10 mx-auto col-md-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Guests</label>
                            <select className="form-control"
                                    d="exampleFormControlSelect1"
                                    name='capacity'
                                    value={capacity}
                                    onChange={handleChange}
                            >
                                {people}
                            </select>
                        </div>
                    </form>
                </div>
                {/*price range*/}
                <div className="col-10 mx-auto col-md-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="price">Room Price ${price}</label>
                            <input type="range"
                                   className="form-control-range"
                                   min={minPrice}
                                   max={maxPrice}
                                   name='price'
                                   id='price'
                                   value={price}
                                   onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
                {/*size*/}
                <div className="col-10 mx-auto col-md-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formControlRange">Room Size</label>
                            <div className="form-row">
                                <div className="col">
                                    <input type="number"
                                           className="form-control"
                                           placeholder="0"
                                           name='minSize'
                                           value={minSize}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input type="number"
                                           className="form-control"
                                           placeholder="0"
                                           name='maxSize'
                                           value={maxSize}
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-10 mx-auto col-md-2 ">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                            name='breakfast'
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Breakfast
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                            name='pets'
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Pets
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}