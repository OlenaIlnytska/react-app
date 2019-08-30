import React, {Component} from "react";
import './Testimonials.css';
import Carousel from "../Carousel/Carousel";

class Testimonials extends Component {

    render() {
        return (
            <div className={'Testimonials'}>

                <div className={'title'}>
                    <h2>Testimonials</h2>
                    <p>What our customers told about us</p>
                </div>

                <Carousel />

            </div>
        )
    }
}

export default Testimonials;
