import React, {Component} from "react";
import './Products.css';
import {NavLink} from 'react-router-dom'
import img from '../../src/logo.png'
import hubstuf from "../img/hubstuf.png";
import jira from "../img/jira.png";
import slack from "../img/slack.png";
import trave from "../img/trave.png";
import netw from "../img/netw.png";
import camp from "../img/camp.png";

class Products extends Component {

    render() {
        return (
            <div className={'Products'}>
                <div className={'title'}>
                    <h2>Most Popular Products</h2>
                    <p>This is the list of products that are most interested in users</p>
                </div>

                <div className={'grid-container'}>
                    <div className={'card'}>
                        <img src={hubstuf} alt=""/>
                        <p>Hubstaff Directory</p>
                    </div>
                    <div className={'card'}>
                        <img src={jira} alt=""/>
                        <p>Jira 2017</p>
                    </div>
                    <div className={'card'}>
                        <img src={slack} alt=""/>
                        <p>Slack Pro</p>
                    </div>
                    <div className={'card'}>
                        <img src={trave} alt=""/>
                        <p>TraveChat</p>
                    </div>
                    <div className={'card'}>
                        <img src={netw} alt=""/>
                        <p>Network</p>
                    </div>
                    <div className={'card'}>
                        <img src={camp} alt=""/>
                        <p>Time Camp</p>
                    </div>
                </div>

                <div className={'AllProducts'}>
                    <a href="">All products</a>
                </div>

            </div>
        )
    }
}

export default Products;
