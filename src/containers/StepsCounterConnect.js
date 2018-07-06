import { connect } from 'react-redux';
import StepsCounter from '../components/StepsCounter';

function mapStateToProps(state) {
	return {
		steps: state.game.steps
	};
}


export default connect(mapStateToProps)(StepsCounter);