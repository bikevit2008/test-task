import React, { Component } from 'react';


export default class StartPage extends Component {

	render() {

		return (
			<div className='mt-3 mb-3 pt-5 pb-5 px-4 start'>
				<h3 className='font-weight-bold text-center'>
					Найди двух одинаковых губернаторов: игра
				</h3>
				<h2 className='text-center serif pb-3'>
					Политическая версия классической игры «Мемори»
				</h2>
				<p>В России продолжается смена губернаторов: кто-то вошел в состав нового федерального правительства, а кто-то просто освободил место «молодым технократам», которые должны на новом месте подготовиться к сентябрьским выборам в своем регионе. Новые губернаторы, как правило, обладают однотипными биографиями и даже внешне чем-то похожи. Проявите политическую выдержку и найдите их всех в новой версии классической игры «Мемори».
				</p>
				<p><span className='font-weight-bold'>Как играть:</span> Откройте две карточки кликом или тапом. Если изображения совпали — вы забираете эти карточки себе. Если нет — они остаются на игровом поле.
				</p>
				<div className='d-flex justify-content-center'>
					<button className='btn start-btn' onClick={()=>this.props.newGame()}>Начать игру</button>
				</div>
			</div>
		);
	}
}

