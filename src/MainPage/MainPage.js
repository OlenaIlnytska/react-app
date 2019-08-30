import React, {Component} from "react";
import classes from './MainPage.css'
import img1 from '../../src/img/allcateg.png'
import img2 from '../../src/img/fingerup.png'
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
import Header from '../Header/Header'
import Search from '../Search/Search'
import Products from '../Products/Products'
import Testimonials from '../Testimonials/Testimonials'
import TopPart from "../Footer/TopPart/TopPart"
import BottomPart from "../Footer/BottomPart/BottomPart"

class Home extends Component {

    inputHandler = (event) => {
        console.log(event.target.value)
    }

    state = {
        token: ''
    }

    componentDidMount() {
        fetch('https://ski-rent-api.herokuapp.com/api/user_token', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(
            {auth: {
                email: 'some_new_email@email.com',
                    password: '12345678'
                }})} )
            .then(data => {
                    this.setState({token: data.body.jwt})
                console.log(data.body)
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return(
            <div className={'MainPage'}>

                <Header/>

                <Search />

                <Products />

                <Testimonials />

                <TopPart />

                <BottomPart />

            </div>
        )
    }
}

export default Home