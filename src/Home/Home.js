import React, {Component} from "react";
import Header from '../Header/Header'
import MainPage from '../MainPage/MainPage'
import './Home.css'

class Home extends Component {

    // inputHandler = (event) => {
    //     console.log(event.target.value)
    // }

    render() {
        return(

            <div className={'Home'}>
                <Header />
                <MainPage />
            </div>
        )
    }
}

export default Home