let age = document.getElementById('age');

function showUser(surname, name) {
	console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


showUser.call(age,'Tkachuk', 'Dima');
