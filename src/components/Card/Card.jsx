import React from 'react'
import './style.css'

class Card extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div>This is a card '{this.props.cardData.title}' :)</div>
    }
}

export default Card;