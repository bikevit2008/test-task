import React, { Component } from 'react';
import { string } from 'prop-types';
import StartPage from './StartPageConnect';
import { GAME_OVER, PLAYING } from '../constants/game';
import Game from '../components/Game';
import GameOver from './GameOverConnect';



export default class GamePlay extends Component {
	static propTypes = {
		status: string
	}
	selectScreen(){
		const { status } = this.props;
		switch (status){
		case PLAYING:
			return <Game/>;
		case GAME_OVER:
			return <GameOver/>;
		default:
			return <StartPage/>;
		}
	}
	render() {
		return (
			this.selectScreen()
		);
	}
}

