import React from 'react'
import Card from '../Card/Card';
import './style.css'

class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardList: [
                {
                    id: 1,
                    title: "test1",
                    rating: 2,
                    createdAt: Date.now(),
                },
                {
                    id: 2,
                    title: "test2",
                    rating: 0,
                    createdAt: Date.now()
                }
            ],
            working: false // if we do something with the column (adding/editing) :)
        }

        this.createCard = this.createCard.bind(this);
        /* this.updateCard = this.updateCard.bind(this);
        this.removeCard = this.removeCard.bind(this); */
        this.orderCards = this.orderCards.bind(this);
        this.cardUpdatedHandler = this.cardUpdatedHandler.bind(this);
        this.cardRemoveHandler = this.cardRemoveHandler.bind(this);
    }

    createCard = (cardData) => {
        cardData = { id: Date.now(), title: Date.now(), rating: Math.floor(Math.random() * 2 + Math.random() * -2 + 1), createdAt: Date.now() };
        console.log('Creating a card :)', cardData);
        this.setState(
            (state) => ({
                cardList: [...state.cardList, cardData],
                working: false,
            }),
            () => this.orderCards());

    }

    /* updateCard = () => {
        console.log('Updating a card :)');
    } */

    /* removeCard = () => {
        console.log('Removing a card :)');
        this.state.cardList.splice(-1, 1);

        this.setState({
            cardList: [...this.state.cardList],
        });
    } */

    orderCards = () => {
        console.log('ordering');

        this.setState((state) => ({
            cardList: state.cardList.sort(function (a, b) {
                // console.log('ordering:', a, b);
                return b.rating - a.rating;
            }),
        }));

        // console.log('ordered', this.state)
    }

    cardUpdatedHandler(cardToUpdate) {
        let index = this.state.cardList.findIndex((card) => card.id === cardToUpdate.id);
        console.log('UP UPDATED HANDLER', index, cardToUpdate);

        if (index !== -1) {
            let listCopy = this.state.cardList;
            listCopy[index] = cardToUpdate;

            this.setState({
                cardList: listCopy,
            }, () => { this.orderCards() });
        }
    }

    cardRemoveHandler(cardToRemove) {
        console.log('card to remove:', cardToRemove)

        this.setState({
            cardList: this.state.cardList.filter((card) => card.id !== cardToRemove)
        })
    }

    render() {
        console.log('trying to render', this.state.cardList)
        let { title, color } = this.props;
        let count = this.state.cardList.length;
        let { cardUpdatedHandler, cardRemoveHandler } = this;

        console.log(this.state.cardList)
        return <div className="card-column col-4 mx-1" style={{ backgroundColor: color }}>
            <h1>{title ?? 'no title'} <span>{count}</span></h1>

            <div className="card-list">
                {this.state.cardList.map(card => {
                    return <Card key={card.id}
                            cardUpdatedHandler={cardUpdatedHandler}
                            cardRemoveHandler={cardRemoveHandler}
                            cardData={card} />
                })}
            </div>

            <button className="btn btn-success" onClick={this.createCard}><i className="bi bi-plus-square"></i> Create</button>
            {/* <button onClick={this.updateCard}>Update</button> */}
            {/* <button onClick={this.removeCard}>Delete</button> */}
        </div>
    }
}

export default Column;