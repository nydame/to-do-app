function onReady() {
    // select DOM elements to use
    const addToDoForm = document.getElementById("addToDoForm");
    const newToDoText = document.getElementById("newToDoText");
    const toDoList = document.getElementById("toDoList");
    const deleteCompletedButton = document.getElementById("deleteCompleted");
    const initialState = "pending";
    const toggleToDoState = el => {
        // toggle class on element
        el.classList.toggle(initialState);
        let classNames = el.className.split(" ");
        let ownCheckbox = el.querySelector('input[type="checkbox"]');
        // if checkbox within el found, toggle checked state
        if (ownCheckbox) {
            let checked = classNames.indexOf(initialState) === -1;
            ownCheckbox.setAttribute("checked", checked);
        }
    };
    // listen for submission
    addToDoForm.addEventListener("submit", event => {
        // prevent page reload or redirection when Submit button is clicked
        event.preventDefault();
        // define elements of list item
        let title = newToDoText.value;
        let newLi = document.createElement("li");
        // provide each list item with a class of "pending"
        newLi.className = initialState;
        // addEventListener to list item so it can toggle add or remove "pending"
        // NB: USING ARROW FUNCTION MEANS "THIS" IS SET TO GLOBAL SCOPE!!!
        // newLi.addEventListener('click', event => {
        // 	toggleToDoState(this);
        // });
        newLi.addEventListener('click', function(event) {
            toggleToDoState(this);
        });
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'todo';
        // build list item and attach to list
        newLi.textContent = title;
        newLi.appendChild(checkbox);
        toDoList.appendChild(newLi);
		// empty text field in preparation for the next entry
        newToDoText.value = '';
    });
    // listen for clicking of Delete button
    deleteCompletedButton.addEventListener("click", function(event) {
		// why is this necessary???
        event.preventDefault();
		//
        let checkedBoxes = document.querySelectorAll(
            "#toDoList [checked=true]"
        );
        let completedListItems = null;
		//
        for (let i = 0; i < checkedBoxes.length; i++) {
            let checkBox = checkedBoxes[i];
            let listItemToDelete = checkBox.parentNode;
            toDoList.removeChild(listItemToDelete);
			// toDoList.removeChild(checkBox);
        }
    });
}

window.onload = function() {
    onReady();
};
