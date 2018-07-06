import React, { Component } from 'react';
import { number } from 'prop-types';


export default class StepsCounter extends Component {
	static propTypes = {
		steps: number
	}
	static defaultProps = {
		steps: 0
	}
	render() {
		const { steps } = this.props;
		return (
			<div className={'row justify-content-center'}>
				<div className={'col-4'}>
					<p className={'text-uppercase font14 font-weight-bold text-center'}>Ходов: {steps}</p>
				</div>
			</div>
		);
	}
}

