import React, { Component } from 'react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

import configureStore from './store/configureStore';
import GamePlay from './containers/GamePlayConnect';

const store = configureStore();


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className={'container'}>
					<div className={'row justify-content-center'}>

						<div className={'main'} style={{ position: 'relative' }}>
							<div className={'col'}>
								<GamePlay/>
							</div>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
