import { CLOSE_CARDS, GAME_OVER, NEW_GAME, NOT_STARTED, OPEN_CARD, PLAYING, POPUP_CLOSE } from '../constants/game';
import {
	generateCards, getPhoto
} from '../utils/game';

const initialState = {
	photosDir: '/images',
	persons: [
		{
			name: 'Дмитрий Артюхов',
			birthday: '1988-02-17',
			subtitle: 'и. о. губернатора Ямало-Ненецкого автономного округа',
			description: 'Получил MBA в Сингапурском университете, а и. о. губернатора стал в мае 2018 года'
		},
		{
			name: 'Дмитрий Азаров',
			birthday: '1970-08-09',
			subtitle: 'и. о. губернатора Самарской области',
			description: 'Стал и. о. губернатора в сентябре 2017 года'
		},
		{
			name: 'Александр Бурков',
			birthday: '1967-04-23',
			subtitle: 'и. о. губернатора Омской области',
			description: 'Первый заместитель председателя фракции «Справедливая Россия», стал и. о. губернатора в октябре 2017 года'
		},
		{
			name: 'Сергей Цивилев',
			birthday: '1961-09-21',
			subtitle: 'и. о. губернатора Кемеровской области',
			description: 'После пожара в Кемерово обвинил мужчину, у которого погибла вся семья, в пиаре на крови, потом извинялся. Стал и. о. губернатора в апреле 2018 года'
		},
		{
			name: 'Александр Моор',
			birthday: '1974-01-06',
			subtitle: 'и. о. губернатора Тюменской области',
			description: 'До последнего назначения семь лет был мэром Тюмени. На новую должность назначен в мае 2018 года.'
		},
		{
			name: 'Глеб Никитин',
			birthday: '1977-08-24',
			subtitle: 'и. о. губернатора Нижегородской области',
			description: 'В сентябре 2017 года стал и. о. губернатора, а в декабре того же года вступил в «Единую Россию»'
		},
		{
			name: 'Айсен Николаев',
			birthday: '1972-01-22',
			subtitle: 'и. о. главы Республики Саха',
			description: 'Полное имя — Сэргэй уола Ньукулаайап Айыы Сиэн. Назначен и. о. главы Республики Саха в мае 2018 года.'
		},
		{
			name: 'Сергей Носов',
			birthday: '1961-02-17',
			subtitle: 'и. о. губернатора Магаданской области',
			description: 'До назначения и. о. губернатора в мае 2018 года был мэром Нижнего Тагила.'
		}
	],
	status: NOT_STARTED,
	steps: 0,
	cards: [],
	openCards: {},
	disabledCards: {},
	popup: {
		isClosed: true
	}
};

export default function game(state = initialState, action) {

	switch (action.type) {
	case POPUP_CLOSE:
		return { ...state, popup: { ...state.popup, isClosed: true } };
	case OPEN_CARD: {
		const cardId = action.payload;
		const { cards, persons, photosDir, steps, disabledCards } = state;
		const openCardsNew = { ...state.openCards, [cardId]: true };
		const openCardsNewKeys = Object.keys(openCardsNew);
		const openCardsNewLength = openCardsNewKeys.length;
		if (openCardsNewLength === 2){
			const personID0 = cards[openCardsNewKeys[0]].personID;
			const personID1 = cards[openCardsNewKeys[1]].personID;
			if (personID0 === personID1){
				const photo = getPhoto(persons[personID0].name, photosDir, 'large');
				const { name, birthday, subtitle, description } = persons[personID0];
				return { ...state,
					openCards: openCardsNew,
					steps: steps + 1,
					disabledCards: { ...disabledCards, [openCardsNewKeys[0]]: true, [openCardsNewKeys[1]]: true },
					popup: {
						isClosed: false,
						photo: photo,
						name: name,
						birthday: birthday,
						subtitle: subtitle,
						description: description
					}
				};
			}
			else {
				return { ...state, openCards: openCardsNew, steps: steps + 1 };
			}
		}
		else {
			return { ...state, openCards: openCardsNew };
		}
	}
	case CLOSE_CARDS:
		return { ...state, openCards: {} };
	case NEW_GAME: {
		let { persons, photosDir } = state;
		return { ...initialState, status: PLAYING, cards: generateCards(persons, photosDir) };
	}
	case GAME_OVER: {
		return { ...state, status: GAME_OVER };
	}

	default:
		return state;
	}

}