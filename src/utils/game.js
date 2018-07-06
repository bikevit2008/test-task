function cyrill_to_latin(text){
	const arrru = new Array ('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э');
	const arren = new Array ('Ya', 'ya', 'u', 'u', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '`', '`', '\'', '\'', 'E', 'e');

	for (let i=0; i<arrru.length; i++){
		let reg = new RegExp(arrru[i], 'g');
		text = text.replace(reg, arren[i]);
	}
	return text;
}
function getLatinSecondName(name){
	const secondName = name.split(' ')[1];
	const latinSN = cyrill_to_latin(secondName).toLowerCase();
	return latinSN;
}

export function getPhoto(personName, photosDir, size){
	const latinSN = getLatinSecondName(personName);
	switch (size) {
	case 'large':
		return `${photosDir}/large/l_${latinSN}@2x.jpg`;
	default:
		return `${photosDir}/small/s_${latinSN}@2x.jpg`;
	}
}

function getUniqueRandomIDForArray(array, externalLength){
	const arrayLength = externalLength || array.length;
	let uniqueID = getRandomInt(0, arrayLength - 1);
	if (array[uniqueID]){
		return uniqueID = getUniqueRandomIDForArray(array, externalLength);
	}
	return uniqueID;
}

export function generateCards(persons, photosDir){
	let personsCount = persons.length;
	let cards = new Array(16);
	let usedPersonsIDs = {};
	for (let cardInd = 0; cardInd < cards.length / 2; cardInd++) {
		let personID = getUniqueRandomIDForArray(usedPersonsIDs, personsCount);
		usedPersonsIDs = { ...usedPersonsIDs, [personID]: true };
		let photo = getPhoto(persons[personID].name, photosDir);
		let person = { photo: photo, personID: personID };

		let cardID0 = getUniqueRandomIDForArray(cards);
		cards[cardID0] = person;
		let cardID1 = getUniqueRandomIDForArray(cards);
		cards[cardID1] = person;
	}

	return cards;
}

export function rightEnding(number, titles){
	var cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

export function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}