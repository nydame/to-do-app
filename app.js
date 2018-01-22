function onReady() {
    // keep track of to-do items
    let toDos = [];
    // select DOM elements to use
    const addToDoForm = document.getElementById("addToDoForm");
    const newToDoText = document.getElementById("newToDoText");
    const toDoList = document.getElementById("toDoList");
    // create latest to-do
    function createNewToDo() {
        // make sure entry isn't an empty string
        if (!newToDoText.value) {
            return;
        }
        // update state
        toDos.push({
            title: newToDoText.value,
            complete: false
        });
        // reset text field
        newToDoText.value = "";
        // show the list
        renderTheUI();
    }
    // reset, rebuild & show the list
    function renderTheUI() {
		// flush stale content
		toDoList.textContent = '';
		// re-build list
        toDos.forEach(function(toDo) {
            // create a new li
            const newLi = document.createElement("li");
            // create a new checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            // create a span to wrap text of to-do
            const titleWrap = document.createElement("span");
            titleWrap.textContent = toDo.title;
            // append elements to li
            newLi.appendChild(checkbox);
            newLi.appendChild(titleWrap); // OMITTED FROM CHECKPOINT INSTRUCTIONS
            // finally, append li to list so that it shows up
            toDoList.appendChild(newLi);
        });
    }
    // listen for new to-do
    addToDoForm.addEventListener("submit", event => {
        event.preventDefault();
        createNewToDo();
    });
}

window.onload = function() {
    onReady();
};
