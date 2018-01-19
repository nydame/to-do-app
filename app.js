function onReady() {
	// select DOM elements to use
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');

	addToDoForm.addEventListener('submit', event => {console.log('submission');debugger;
		// prevent page reload or redirection
		event.preventDefault();
		// 
		let title = newToDoText.value; console.log(title);
		let newLi = document.createElement('li');
		let checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		newLi.textContent = title;
		newLi.appendChild(checkbox);
		toDoList.appendChild(newLi);
		newToDoText.value = '';
	});
}

window.onload = function() {
	onReady();
};