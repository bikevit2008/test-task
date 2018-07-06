import React, { Component } from 'react';
import { func, number } from 'prop-types';

import { rightEnding } from '../utils/game';
import GameOver from '../components/GameOver';


export default class GameOverSmart extends Component {
	static propTypes = {
		steps: number,
		newGame: func
	}
	titles = ['ход', 'хода', 'ходов']

	render() {
		const { steps, newGame } = this.props;
		const stepsInfo = `${steps} ${rightEnding(steps, this.titles)}`;
		return (
			<GameOver stepsInfo={stepsInfo} newGame={()=>newGame()}/>
		);
	}
}

