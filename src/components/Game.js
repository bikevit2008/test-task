import React, { Component } from 'react';
import Cards from '../containers/CardsConnect';
import StepsCounter from '../containers/StepsCounterConnect';
import PopUpSmart from '../containers/PopUpConnect';


export default class Game extends Component {

	render() {
		return (
			<div className='d-flex justify-content-center start mt-4 mb-3'>
				<div className='mt-1 mb-1 pt-2 pb-5 px-4'>
					<div className={'game position-relative'}>
						<StepsCounter/>
						<Cards/>
						<PopUpSmart/>
					</div>
				</div>
			</div>
		);
	}
}

