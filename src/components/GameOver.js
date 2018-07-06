import React, { Component } from 'react';
import { string, func } from 'prop-types';
import refreshIcon from '../assets/images/baseline-refresh-24px.svg';


export default class GameOver extends Component {

	static propTypes = {
		stepsInfo: string,
		newGame: func
	}

	static defaultProps = {
		stepsInfo: '0 ходов',
		newGame: ()=>{}
	}

	render() {
		const { stepsInfo, newGame } = this.props;
		return (
			<div className='mt-3 mb-3 pt-5 pb-5 px-4'>
				<div className={'mb-5 mx-3'}>
					<h1 className='font-weight-bold'>
					Я могу отличить губернаторов за {stepsInfo}!
					</h1>
					<h4 className={'serif mt-3'}>
					Хотя сделать это очень сложно
					</h4>
				</div>
				<div className='text-center'>
					<button className='btn start-btn px-4' onClick={()=>newGame()}>
						<img src={refreshIcon}/>
						<span className={'align-middle'}>Сыграть еще раз</span>
					</button>
				</div>
			</div>
		);
	}
}

