import React from 'react'
import CardRating from './CardRating';
import convertDate from '../../helpers/convertDate'
import './style.css'

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            card: props.cardData,
        }

        this.cardUpdatedEvent = this.cardUpdatedEvent.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.ratingUpdateHandler = this.ratingUpdateHandler.bind(this);
    }

    // getting rating from the child (CardRating)
    ratingUpdateHandler(rating) {
        // creating/copying a 'new' card object
        let newCard = this.state.card;
        newCard.rating = rating;

        console.log('rating has been changed:', rating, this.state.card.rating);
        this.setState(({
            card: newCard,
        }),
            () => { this.cardUpdatedEvent() }
        );
    }

    // passing to the parent element (Column)
    cardUpdatedEvent() {
        this.props.cardUpdatedHandler(this.state.card);
    }

    // passing to the parent element (Column)
    removeCard() {
        console.log('removing card');

        this.props.cardRemoveHandler(this.props.cardData.id);
    }

    render() {
        let { title, rating, createdAt } = this.props.cardData;
        let { ratingUpdateHandler, removeCard } = this;

        return <div className="card border-success mb-3" styles="maxWidth: 18rem;">
            <div className="card-header bg-transparent border-success">{title}</div>
            <div className="card-body text-success">
                <i className="bi bi-clock"></i> {convertDate(createdAt, true)}
            </div>
            <div className="card-footer bg-transparent border-success">
                <div className="d-flex justify-content-between">
                    <CardRating rating={rating} ratingUpdateHandler={ratingUpdateHandler} />
                    <button className="btn btn-danger" onClick={removeCard}><i className="bi bi-trash"></i> Remove</button>
                </div>
            </div>
        </div>
    }
}

export default Card;