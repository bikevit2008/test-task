import { connect } from 'react-redux';
import Cards from '../components/Cards';

function mapStateToProps(state) {
	return {
		game: state.game
	};
}

export default connect(mapStateToProps)(Cards);