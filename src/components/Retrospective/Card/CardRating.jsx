import React from 'react'

class CardRating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.rating
        }
    }

    increaseRating = () => {
        this.setState((prevState) => ({
            rating: prevState.rating + 1,
        }),
            () => { this.ratingUpdatedEvent() }
        );
    }

    decreaseRating = () => {
        this.setState((prevState) => ({
            rating: prevState.rating - 1,
        }),
            () => { this.ratingUpdatedEvent() }
        );
    }

    // pass the rating to the parent element :)
    ratingUpdatedEvent = () => {
        this.props.ratingUpdateHandler(this.state.rating);
    }

    render() {
        let { increaseRating, decreaseRating } = this;

        return <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger" onClick={decreaseRating}><i className="bi bi-hand-thumbs-down"></i></button>
            <button type="button" className="btn btn-default" disabled>[{this.state.rating}]</button>
            <button type="button" className="btn btn-success" onClick={increaseRating}><i className="bi bi-hand-thumbs-up"></i></button>
        </div>
    }
}

export default CardRating;