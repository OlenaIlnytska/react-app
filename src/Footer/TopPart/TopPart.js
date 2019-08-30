import React, {Component} from "react";
import './TopPart.css';
import {NavLink} from 'react-router-dom'
import footparr from "../../../src/img/footparr.png";

class TopPart extends Component {

    render() {
        return (
            <div className={'TopPart'}>

                <div className={'footerPhoto'}>
                    <img src={footparr} alt=""/>
                </div>

                <div className={'footerMenu'}>
                    <div className={'ListElement'}>
                        <NavLink className={'NavLink'} to="/">About us</NavLink>
                    </div>
                    <div className={'ListElement'}>
                        <NavLink className={'NavLink'} to="/aboutUs">Terms of service</NavLink>
                    </div>
                    <div className={'ListElement'}>
                        <NavLink className={'NavLink'} to="/logIn">Privacy policy</NavLink>
                    </div>
                    <div className={'ListElement'}>
                        <NavLink className={'NavLink'} to="/signUp">Contact us</NavLink>
                    </div>
                </div>

            </div>
        )
    }
}

export default TopPart;
