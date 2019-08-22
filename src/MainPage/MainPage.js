import React, {Component} from "react";
import classes from './MainPage.css'
import img1 from '../../src/img/1.png'
import img2 from '../../src/img/2.png'
import hubstuf from '../../src/img/hubstuf.png'
import jira from '../../src/img/jira.png'
import slack from '../../src/img/slack.png'
import trave from '../../src/img/trave.png'
import netw from '../../src/img/netw.png'
import camp from '../../src/img/camp.png'
import footparr from '../../src/img/footparr.png'
import arrow from '../../src/img/arrow.png'
import {NavLink} from "react-router-dom";
import Carousel from '../../src/Carousel/Carousel'

class Home extends Component {

    inputHandler = (event) => {
        console.log(event.target.value)
    }

    render() {
        return(
            <div className={'MainPage'}>
                <div className={'Part1'}>
                    <div className={'title'}>
                        <h2>Quick Search for Your <span className={'green'}>Perfect Products</span></h2>
                        <p>Innovate &#183; List &#183; Connect</p>
                    </div>

                    <div className="Input">
                        <div className={'Select'}>
                            <select>
                                <option>
                                    Category
                                </option>
                                <option>-</option>
                                <option>-</option>
                            </select>
                        </div>

                        <div>
                            <input type="text" onChange={this.inputHandler}/>
                        </div>

                        <div>
                            <button className={'Button'}>Start Searching</button>
                        </div>
                    </div>

                    <div className="smallContainer">

                        <button className={'Container'}>
                                <img src={img1} alt=""/>
                                All categories
                        </button>

                        <button className={'Container'}>
                                <img src={img2} alt=""/>
                                How it works?
                        </button>

                    </div>
                </div>



                <div className={'Part2'}>
                    <div className={'title'}>
                        <h2>Most Popular Products</h2>
                        <p>This is the list of products that are most interested in users</p>
                    </div>

                    <div className={'Row'}>
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
                    </div>


                    <div className={'Row'}>
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

                <div className={'Part3'}>

                    <div className={'title'}>
                        <h2>Testimonials</h2>
                        <p>What our customers told about us</p>
                    </div>

                    <Carousel />

                </div>

                <div className={'Part4'}>

                    <div className={'footerPhoto'}>
                        <img src={footparr} alt=""/>
                    </div>

                    <div className={'footerMenu'}>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/">About us</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/aboutUs">Terms of service</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/logIn">Privacy policy</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/signUp">Contact us</NavLink>
                        </div>
                    </div>

                </div>

                <div className={'Part5'}>
                    <p>© 2018 Find Parrot</p>
                </div>

            </div>
        )
    }
}

export default Home