import React from 'react'
import icon from '../assets/images/icon-music.svg'
import './styles.css'

const OrderSummary = () => {
    return (
        <div className="card">
            <div className="card__header"></div>
            <div className="card__body">
                <h1 className="card__title">Order Summary</h1>
                <span className="card__description">
                    You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                </span>
                <div className="card__product">
                    <img className="icon" src={icon} alt="music"/>
                    <div className="item">
                        <span className="item__name">Annual Plan</span>
                        <span className="item__price">$59.99/year</span>
                    </div>
                    <a href="!#" className="link">Change</a>
                </div>
                <a href="!#" className="card__button">Proceed to Payment</a>
                <a href="!#" className="card__cancel">Cancel Order</a>
            </div>
        </div>
    )
}

export default OrderSummary
