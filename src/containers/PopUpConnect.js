import { connect } from 'react-redux';
import PopUpSmart from './PopUpSmart';
import { bindActionCreators } from 'redux';
import { popupClose } from '../actions/game';

function mapStateToProps(state) {
	return {
		popup: state.game.popup
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ popupClose }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PopUpSmart);