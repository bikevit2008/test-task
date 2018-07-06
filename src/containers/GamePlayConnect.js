import { connect } from 'react-redux';
import GamePlay from './GamePlay';

function mapStateToProps(state) {
	return {
		status: state.game.status
	};
}


export default connect(mapStateToProps)(GamePlay);