import { createAction } from 'redux-actions';
import { CLOSE_CARDS, GAME_OVER, NEW_GAME, OPEN_CARD, POPUP_CLOSE } from '../constants/game';

export const openCardAction = createAction(OPEN_CARD);
export const closeCardsAction = createAction(CLOSE_CARDS);
export const newGame = createAction(NEW_GAME);
export const popupCloseAction = createAction(POPUP_CLOSE);
const finishGame = createAction(GAME_OVER);

const closeCardsWait = 500;

export function openCard(cardID) {
	return (dispatch, getState) => {
		const { openCards } = getState().game;
		const openCardsLength = Object.keys(openCards).length;
		if (openCardsLength !== 2) {
			const request = async () => {
				await dispatch(openCardAction(cardID));
				dispatch(closeCards());
			};
			request();
		}
	};
}


function closeCards(){
	return (dispatch, getState) => {
		const { openCards } = getState().game;
		const openCardsLength = Object.keys(openCards).length;
		if (openCardsLength === 2) {
			setTimeout(() => {
				return dispatch(closeCardsAction());
			}, closeCardsWait);
		}
	};
}

export function popupClose(){
	return (dispatch, getState) => {
		const { disabledCards, cards } = getState().game;
		const disabledCardsLength = Object.keys(disabledCards).length;
		dispatch(popupCloseAction());
		if (disabledCardsLength === cards.length){
			return setTimeout(()=>{
				dispatch(finishGame());
			}, 500);
		}
	};
}
