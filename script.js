const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
	removeDropdownList();

	const value = input.value.toLowerCase();
	const filteredNames = [];
	fruit.forEach((fruitName) => {
		if (fruitName.toLowerCase().includes(value))
			filteredNames.push(fruitName);
	});
	showSuggestions(filteredNames);
}

function showSuggestions(filteredNames) {
	const suggestionsList = document.createElement("ul");

	filteredNames.forEach((fruit) => {
		const listItem = document.createElement("li");
		const fruitButton = document.createElement("button");
		fruitButton.innerHTML = fruit;
		fruitButton.addEventListener('click', useSuggestion);
		listItem.appendChild(fruitButton);
		suggestionsList.appendChild(listItem);
	})
	document.querySelector(".suggestions").appendChild(suggestionsList);
}

function removeDropdownList() {
	const suggestionsList = document.querySelector(".suggestions ul");
	if (suggestionsList) suggestionsList.remove();
}

function useSuggestion(e) {
	e.preventDefault();

	const button = e.target;
	input.value = button.innerHTML;

	removeDropdownList();
}

input.addEventListener('keyup', searchHandler);