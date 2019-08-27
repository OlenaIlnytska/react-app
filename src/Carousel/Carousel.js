import React from "react";
// import Slider from "react-slick";
import '../Card/Card.css';
import Swiper from 'react-id-swiper';
import Card from '../Card/Card'
import data from "../Card/data";
// scss
import 'react-id-swiper/lib/styles/scss/swiper.scss';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';

class Carousel extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            card: data.cards[0],
            cards: data.cards
        }
    }

    render() {
        const {card, cards} = this.state;

        const params = {
            slidesPerView: 3,
            // slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            active: 'swiper-slide-duplicate-active',
            next: 'swiper-slide-duplicate-next',
            prev: 'swiper-slide-duplicate-prev',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }

        return(
            <Swiper {...params}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <Card card={card}/>
                    </div>
                ))}
            </Swiper>
        )
    }






    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         card: data.cards[0],
    //         cards: data.cards
    //     }
    // }
    //
    // nextProperty = () => {
    //     const newIndex = this.state.card.id + 1
    //     this.setState({
    //         card: data.cards[newIndex]
    //     })
    //     if(this.state.card.id === this.state.cards.length){
    //         this.setState({
    //             card: this.state.cards[0]
    //         })
    //     }
    //
    // }
    //
    // prevProperty = () => {
    //     const newIndex = this.state.card.id - 1
    //     this.setState({
    //         card: data.cards[newIndex]
    //     })
    // }
    //
    // render() {
    //
    //     const {card, cards} = this.state
    //
    //     return (
    //
    //         <div className={'container'}>
    //
    //             <button
    //                 onClick={this.prevProperty}
    //                 disabled={card.id === 0}
    //             >
    //                 Prev
    //             </button>
    //
    //             <button
    //                 onClick={this.nextProperty}
    //                 disabled={card.id === data.cards.length-1}
    //             >
    //                 Next
    //             </button>
    //
    //             {/*<Slider {...settings}>*/}
    //             <div className={`cards-slider active-slide-${card.id}`}>
    //                 <div className={'cards-slider-wrapper'} style={{
    //                     'transform': `translateX(-${card.id*100/cards.length}%)`
    //                 }}>
    //
    //                     {cards.map((card, index) => (
    //                         <div className={'block'} id={`card-${index}`} key={index}>
    //                             <div className={'content'}>
    //                                 <img className={'image'} src={card.photo} alt='' />
    //                                 <div className={'topContent'}>
    //                                     <p>
    //                                         {card.text}
    //                                     </p>
    //
    //                                     <div>
    //                                         <h3>{card.fullName}</h3>
    //                                         <h4>{card.description}</h4>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //
    //                 </div>
    //             </div>
    //
    //
    //             {/*</Slider>*/}
    //         </div>
    //     );
    // }














    // render() {
    //     const settings = {
    //         dots: false,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     };
    //     return (
    //         <div className={'container'}>
    //             <Slider {...settings}>
    //
    //                     <div className={'block'}>
    //                         <div className={'content'}>
    //                             <img className={'image'} src={img1} alt='' />
    //                             <div className={'topContent'}>
    //                                 <p>
    //                                     Loved working with LinkUp. Great guys, developers, and management. They
    //                                     knew how to do the job, in the most professional way.
    //                                 </p>
    //
    //                                 <div className={'endContent'}>
    //                                     <h3>Adam Frank</h3>
    //                                     <h4>CTO ScaleAbout</h4>
    //                                 </div>
    //                             </div>
    //
    //                         </div>
    //                     </div>
    //
    //                     <div className={'block'}>
    //                         <div className={'content'}>
    //                             <img className={'image'} src={img2} alt='' />
    //                             <div className={'topContent'}>
    //                                 <p>
    //                                     I have been incredibly impressed with LinkUp team of developers. They worked hard
    //                                     to deliver the highest-quality product possible and exceeded my expectations at
    //                                     every step of the way. I initially found Andriy in search of a better price than
    //                                     what I could find locally with other development firms. But what I found - in
    //                                     addition to a better price - was a much higher-quality product as well, in every way:
    //                                     service, design, development, communications...etc. 5+++ Stars work. Great job.
    //                                 </p>
    //
    //                                 <div className={'endContent'}>
    //                                     <h3>John Kamman</h3>
    //                                     <h4>Wholesum Founder</h4>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //
    //                     <div className={'block'}>
    //                         <div className={'content'}>
    //                             <img className={'image'} src={img3} alt='' />
    //                             <div className={'topContent'}>
    //                                 <p>
    //                                     Nice company willing to work and get educated at he same time. Ready to face any
    //                                     challenges and very friendly with customers. They quote very humbly and every invoice
    //                                     can be discussed well in advance. We made a custom design web shop with them and keep
    //                                     on cooperating on development and maintenance. Highly recommended.
    //                                 </p>
    //
    //                                 <div className={'endContent'}>
    //                                     <h3>Oleh Zavadsky</h3>
    //                                     <h4>CEO Ljus Sp. z o.o.</h4>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //             </Slider>
    //         </div>
    //     );
    // }
}

export default Carousel