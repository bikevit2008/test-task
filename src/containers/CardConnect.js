import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCard } from '../actions/game';
import CardSmart from './CardSmart';

function mapStateToProps() {
	return {};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openCard }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSmart);