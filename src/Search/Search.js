import React, {Component} from "react";
import './Search.css';
import {NavLink} from 'react-router-dom'
import img from '../../src/logo.png'

class Search extends Component {

    render() {
        return (
            <div className={'Search'}>
                <div>
                    <div className={'title'}>
                        <h2>Quick Search for Your <span className={'green'}>Perfect Products</span></h2>
                        <p>Innovate &#183; List &#183; Connect</p>
                    </div>

                    <form action="">
                        <div className="Input">

                            <div className="dropdown">
                                <button className="dropbtn">Category</button>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>

                            <div>
                                <input type="text" onChange={this.inputHandler}/>
                            </div>

                            <div>
                                <button className={'Button'}>Start Searching</button>
                            </div>
                        </div>
                    </form>
                </div>



                <div className="smallContainer">

                    <button className={'Container container-1'}>
                        {/*<img src={img1} alt=""/>*/}
                        <span>All categories</span>
                    </button>

                    <button className={'Container container-2'}>
                        {/*<img src={img2} alt=""/>*/}
                        <span>How it works?</span>
                    </button>

                </div>
            </div>
        )
    }
}

export default Search;
