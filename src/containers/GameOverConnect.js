import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGame } from '../actions/game';
import GameOver from '../containers/GameOverSmart';

function mapStateToProps(state) {
	return {
		steps: state.game.steps
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ newGame }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GameOver);