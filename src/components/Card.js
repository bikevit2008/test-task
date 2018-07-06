import React, { Component } from 'react';
import { any, func, string, bool } from 'prop-types';
import caseImg from '../assets/images/рубашка.png';



export default class Card extends Component {
	static propTypes = {
		img: any.isRequired,
		onClickFunc: func.isRequired,
		caseClass: string,
		photoClass: string,
		isDisabled: bool
	}
	static defaultProps = {
		caseClass: 'opacity1',
		photoClass: 'opacity0'
	}
	render() {
		const { img, onClickFunc, isDisabled, caseClass, photoClass } = this.props;
		return (
			<div className={'col-3 p-0 inline-block'}>
				<div className={'p-1'}>
					<div className={`position-relative ${isDisabled ? ' invisible' : ''}`} style={{ height: 85 }}>
						<img className={`img-fluid position-absolute transition-opacity ${photoClass}`} src={img}/>
						<img className={`img-fluid position-absolute pointer transition-opacity ${caseClass}`} src={caseImg} onClick={()=>onClickFunc()}/>
					</div>
				</div>
			</div>
		);
	}
}

