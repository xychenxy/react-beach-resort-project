import React, {Component} from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component{
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };


    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room=>room.featured === true)
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))

        this.setState({
            rooms,
            sortedRooms:rooms,
            featuredRooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize

        })

    }

    formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>image.fields.file.url)
            let room = {...item.fields, images, id}
            return room;
        });
        return tempItems;
    }

    getRoom = slug =>{
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room=>room.slug === slug)
        return room;
    }

    handleChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name
        this.setState(
            {
                [name]:value
            },
            this.filterRooms
        )
    }

    filterRooms = () =>{
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        let allRooms = [...rooms]
        capacity = parseInt(capacity)
        price = parseInt(price)

        // filter by type
        if (type !== 'all'){
            allRooms = allRooms.filter(room=>room.type === type)
        }

        // filter by capacity{
        if (capacity !== 1){
            allRooms = allRooms.filter(room=>room.capacity >= capacity)
        }

        // filter by price
        allRooms = allRooms.filter(room => room.price <= price);
        // filter by size
        allRooms = allRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        // filter by breakfast
        if (breakfast) {
            allRooms = allRooms.filter(room => room.breakfast === true);
        }
        // filter by pets
        if (pets) {
            allRooms = allRooms.filter(room => room.pets === true);
        }

        this.setState({
            sortedRooms: allRooms
        })

    }



    render(){
        return(
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom:this.getRoom,
                    handleChange:this.handleChange
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}