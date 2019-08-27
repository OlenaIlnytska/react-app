import React from "react";
import './Card.css';

const Card = (props) => {
    return(

        <div className={'swiper-container'}>
            <div className={'swiper-slide'}>
                <div className={'block'}>
                    <div className={'content'}>
                        <img className={'image'} src={props.card.photo} alt='' />
                        <div className={'topContent'}>
                            <p>
                                {props.card.text}
                            </p>

                            <div>
                                <h3>{props.card.fullName}</h3>
                                <h4>{props.card.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
