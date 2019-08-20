import React, {Component} from "react";
import classes from './Home.css'

class Home extends Component {
    render() {
        return(
            <div className={classes.Home + ' container'}>
                <h2>Quick Search for Your <span className={classes.green}>Perfect Products</span></h2>
                <p>Innovate &#183; List &#183; Connect</p>
                <select>
                    <option>Category</option>
                    <option>-</option>
                    <option>-</option>
                </select>
                <input type="text"/>
                <button>Start Searching</button>
            </div>
        )
    }
}

export default Home