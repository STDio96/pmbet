import React from 'react'
import Card from '../Card/Card';
import NewCardForm from '../NewCardForm/NewCardForm';
import './style.css'

class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardList: [
                /* {
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
                } */
            ],
            working: false // if we do something with the column (adding/editing) :)
        }

        this.createCard = this.createCard.bind(this);
        this.orderCards = this.orderCards.bind(this);
        this.cardUpdateHandler = this.cardUpdateHandler.bind(this);
        this.cardRemoveHandler = this.cardRemoveHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    createCard = (cardData) => {
        this.setState({
            working: true,
        });
    }

    orderCards = () => {
        this.setState((state) => ({
            cardList: state.cardList.sort(function (a, b) {
                return b.rating - a.rating;
            }),
        }));
    }

    cardUpdateHandler(cardToUpdate) {
        let index = this.state.cardList.findIndex((card) => card.id === cardToUpdate.id);
        // console.log('parent update handler', index, cardToUpdate);

        if (index !== -1) {
            let listCopy = this.state.cardList;
            listCopy[index] = cardToUpdate;

            this.setState({
                cardList: listCopy,
            }, () => { this.orderCards() });
        }
    }

    cardRemoveHandler(cardToRemove) {
        // console.log('card to remove:', cardToRemove)

        this.setState({
            cardList: this.state.cardList.filter((card) => card.id !== cardToRemove)
        })
    }

    submitHandler(title) {
        // console.log('submitHandler', title)
        let id = Date.now();
        let cardData = {
            id, // id: id
            title, // title: title
            rating: 0,
            createdAt: id
        }

        // console.log('Creating a card :)', cardData);
        this.setState(
            (state) => ({
                cardList: [...state.cardList, cardData],
                working: false,
            }),
            () => this.orderCards());
    }

    render() {
        // console.log('trying to render', this.state.cardList)
        let { title, color } = this.props;
        let count = this.state.cardList.length;
        let { cardUpdateHandler, cardRemoveHandler, submitHandler } = this;

        return <div className="card-column col-4 mx-1" style={{ backgroundColor: color }}>
            <div className="card-column-title d-flex">
                <h3>{title ?? 'no title'} <span className="small">[{count}]</span></h3>
                {!this.state.working && (
                    <button className={`btn btn-success ml-auto ${this.state.working ? 'd-none' : ''}`} onClick={this.createCard}><i className="bi bi-plus-square"></i> Create</button>
                )}
            </div>

            <hr />

            {this.state.working && (
                <NewCardForm submitHandler={submitHandler} />
            )}

            <div className="card-list">
                {this.state.cardList.map(card => {
                    return <Card key={card.id}
                        cardUpdateHandler={cardUpdateHandler}
                        cardRemoveHandler={cardRemoveHandler}
                        cardData={card} />
                })}
            </div>
        </div>
    }
}

export default Column;