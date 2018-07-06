import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGame } from '../actions/game';
import StartPage from '../components/StartPage';

function mapStateToProps() {
	return {};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ newGame }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(StartPage);