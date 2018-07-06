import React, { Component } from 'react';
import { any, bool, number } from 'prop-types';

import Card from '../components/Card';


export default class CardSmart extends Component {
	static propTypes = {
		img: any.isRequired,
		isDisabled: bool,
		cardID: number.isRequired,
		isOpened: bool,
		wait: number
	}
	static defaultProps = {
		wait: 500
	}
	state = {
		caseClass: 'opacity1',
		photoClass: 'opacity0'
	}
	static getDerivedStateFromProps(nextProps, prevState){
		const { isOpened } = nextProps;
		if (isOpened){
			return { caseClass: 'opacity0', photoClass: 'opacity1' };
		}
		else {
			return { caseClass: 'opacity1', photoClass: 'opacity0' };
		}
	}


	render() {
		const { img, isDisabled, openCard, cardID } = this.props;
		return (
			<Card img={img} onClickFunc={()=>openCard(cardID)} isDisabled={isDisabled} photoClass={this.state.photoClass} caseClass={this.state.caseClass}/>
		);
	}
}

