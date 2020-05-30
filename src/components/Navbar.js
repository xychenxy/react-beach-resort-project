import React, {Component} from 'react';
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

export default class Navbar extends Component{

    state = {
        menu:false
    }

    ToggleMenu = () => {
        this.setState({menu:!this.state.menu})
    }

    render(){
        const show = this.state.menu ? "show" : "";
        return(
            <nav className="navbar navbar-expand-lg px-5 navbar-dark">
                <Link to='/' className="navbar-brand"><img src={logo} alt=""/></Link>
                <button className="navbar-toggler d-lg-none" type="button" onClick={this.ToggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse " + show}>

                    <ul className="navbar-nav mx-auto text-capitalize ">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/rooms/' className="nav-link">Room</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}