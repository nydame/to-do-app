function onReady() {
    // keep track of to-do items
    let toDos = [];
    // assign ID numbers to to-do items
    let id = 0;
    // select DOM elements to use
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    // create latest to-do
    function createNewToDo() {
        // make sure entry isn't an empty string
        if (!newToDoText.value) {
            return;
        }
        // update state
        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id,
        });
        // reset text field
        newToDoText.value = '';
        // increment the ID
        id++;
        // finally, update the list to reflect latest data & show
        renderTheUI();
    }
    // reset, rebuild & show the list according to latest data
    function renderTheUI() {
        // flush stale content
        toDoList.textContent = '';
        // re-build list
        toDos.forEach(function(toDo) {
            // create a new li
            const newLi = document.createElement('li');
            // create a new checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            // create a span to wrap text of to-do
            const titleWrap = document.createElement('span');
            titleWrap.textContent = toDo.title;
            // create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            // provide a listener for the delete deleteButton
            deleteButton.addEventListener('click', function(event) {
                event.preventDefault();
                deleteToDo(toDo.id);
            });
            // append elements to li
            newLi.appendChild(checkbox);
            newLi.appendChild(titleWrap); // OMITTED FROM CHECKPOINT INSTRUCTIONS
            newLi.appendChild(deleteButton);
            // finally, append li to list so that it shows up
            toDoList.appendChild(newLi);
        });
    }
    // listen for click of delete buttons
    function deleteToDo(id) {
        console.log('Delete ' + id);
        debugger;
        toDos = toDos.filter(toDo => toDo.id !== id);
        debugger;
        renderTheUI();
    }
    // listen for new to-do
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });
}

window.onload = function() {
    onReady();
};
