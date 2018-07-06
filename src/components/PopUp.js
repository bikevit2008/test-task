import React, { Component } from 'react';
import { func, string } from 'prop-types';



export default class PopUp extends Component {
	static propTypes = {
		photo: string,
		name: string,
		age: string,
		subtitle: string,
		description: string,
		onClickFunc: func,
		animateClassName: string
	}
	static defaultProps = {
		photo: '',
		name: 'Александр Бурков',
		age: '40 лет',
		subtitle: 'и. о. губернатора Омской области',
		description: 'Первый заместитель председателя фракции «Справедливая Россия», стал и. о. губернатора в октябре 2017 года',
		onClickFunc: () => {},
		visibility: 'visible'
	}
	render() {
		const { photo, name, age, subtitle, description, onClickFunc, animateClassName } = this.props;
		return (
			<div className={`position-absolute popup-wrapper ${animateClassName}`}>
				<div className='card popup p-2'>
					<img className='card-img-top p-1 pb-0' src={photo}/>
					<div className='card-body text-center pt-1 px-0'>
						<h5 className='card-title font-weight-bold m-0 text-capitalize'>{name}, {age}</h5>
						<p className={'font-weight-bold pt-0 m-1 font12'}>{subtitle}</p>
						<p className='card-text font15'>{description}</p>
						<button className='btn btn-dark' onClick={()=>onClickFunc()}>Дальше</button>
					</div>
				</div>
			</div>
		);
	}
}

