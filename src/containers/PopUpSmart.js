import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';

import PopUp from '../components/PopUp';
import { rightEnding } from '../utils/game';


export default class PopUpSmart extends Component {
	static propTypes = {
		photo: string,
		name: string,
		birthday: string,
		subtitle: string,
		description: string,
		isClosed: bool,
		popupClose: func
	}
	static defaultProps = {
		birthday: '1970-08-09'
	}
	titles = ['год', 'года', 'лет']
	state = {
		className: ''
	}
	static getDerivedStateFromProps(nextProps, prevState){
		const { isClosed } = nextProps.popup;
		if (isClosed){
			if (prevState.className === ''){
				return prevState;
			}
			else {
				return { className: 'popup-close' };
			}
		}
		else {
			return { className: 'popup-open' };
		}
	}

	render() {
		const { popupClose } = this.props;
		const { photo, name, birthday, subtitle, description } = this.props.popup;
		const diffYears = new Date().getFullYear() - new Date(birthday).getFullYear();
		const ageEnds = rightEnding(diffYears, this.titles);
		return (
			<PopUp photo={photo}
				   name={name}
				   subtitle={subtitle}
				   description={description}
				   onClickFunc={()=>popupClose()}
				   age={`${diffYears} ${ageEnds}`}
				   animateClassName={this.state.className}
			/>
		);
	}
}

