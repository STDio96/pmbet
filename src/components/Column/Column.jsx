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
                    title: "test1"
                },
                {
                    id: 2,
                    title: "test2"
                }
            ],
            working: false // if we do something with the column :)
        }

        this.createCard = this.createCard.bind(this);
        this.updateCard = this.updateCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    createCard = (cardData) => {
        cardData = { id: Date.now(), title: Date.now() };
        console.log('Creating a card :)', cardData);
        this.setState((state) => ({
            cardList: [...state.cardList, cardData],
            working: false,
        }));
    }

    updateCard = () => {
        console.log('Updating a card :)');
    }

    removeCard = () => {
        console.log('Removing a card :)');
        this.state.cardList.splice(-1, 1);
        
        this.setState({
            cardList: [...this.state.cardList],
        });
    }

    render() {
        console.log('trying to render', this.state.cardList)
        let { title, color } = this.props;
        let count = this.state.cardList.length;

        console.log(this.state.cardList)
        return <div>
            <h1 style={{ backgroundColor: color }}>{title ?? 'no title'} <span>{count}</span></h1>

            <button onClick={this.createCard}>Create</button>
            <button onClick={this.updateCard}>Update</button>
            <button onClick={this.removeCard}>Delete</button>

            <div>
                {this.state.cardList.map(card => {
                    return <Card key={card.id} cardData={card} />
                })}
            </div>

        </div>
    }
}

export default Column;