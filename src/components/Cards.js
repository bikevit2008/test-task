import React, { Component } from 'react';
import { object } from 'prop-types';
import CardSmart from '../containers/CardConnect';


export default class Cards extends Component {
	static propTypes = {
		game: object
	}

	render() {
		const { cards, disabledCards, openCards } = this.props.game;
		return (
			cards.map((card, i)=><CardSmart key={i} img={cards[i].photo} isDisabled={disabledCards[i]} cardID={i} isOpened={openCards[i]}/>)

		);
	}
}
