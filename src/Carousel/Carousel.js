import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import img1 from '../../src/img/adam.png'
import img2 from '../../src/img/john.png'
import img3 from '../../src/img/oleh.png'

class Carousel extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className={'container'}>
                <Slider {...settings}>

                        <div className={'block'}>
                            <div className={'content'}>
                                <img className={'image'} src={img1} alt='' />
                                <div className={'topContent'}>
                                    <p>
                                        Loved working with LinkUp. Great guys, developers, and management. They
                                        knew how to do the job, in the most professional way.
                                    </p>

                                    <div className={'endContent'}>
                                        <h3>Adam Frank</h3>
                                        <h4>CTO ScaleAbout</h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={'block'}>
                            <div className={'content'}>
                                <img className={'image'} src={img2} alt='' />
                                <div className={'topContent'}>
                                    <p>
                                        I have been incredibly impressed with LinkUp team of developers. They worked hard
                                        to deliver the highest-quality product possible and exceeded my expectations at
                                        every step of the way. I initially found Andriy in search of a better price than
                                        what I could find locally with other development firms. But what I found - in
                                        addition to a better price - was a much higher-quality product as well, in every way:
                                        service, design, development, communications...etc. 5+++ Stars work. Great job.
                                    </p>

                                    <div className={'endContent'}>
                                        <h3>John Kamman</h3>
                                        <h4>Wholesum Founder</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'block'}>
                            <div className={'content'}>
                                <img className={'image'} src={img3} alt='' />
                                <div className={'topContent'}>
                                    <p>
                                        Nice company willing to work and get educated at he same time. Ready to face any
                                        challenges and very friendly with customers. They quote very humbly and every invoice
                                        can be discussed well in advance. We made a custom design web shop with them and keep
                                        on cooperating on development and maintenance. Highly recommended.
                                    </p>

                                    <div className={'endContent'}>
                                        <h3>Oleh Zavadsky</h3>
                                        <h4>CEO Ljus Sp. z o.o.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel