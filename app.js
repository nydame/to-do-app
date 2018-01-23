function onReady() {
    // access the list element so UI can be rendered from local storage
    let toDoList = document.getElementById('toDoList');
    // keep track of to-do items
    let toDos = getToDos();
    // assign ID numbers to to-do items
    let id = toDos.length;
    // show to-do list if it has been saved
    if (toDos.length) {
        renderTheUI();
    }
    // select DOM elements to use
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
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
        // update the list to reflect latest data & show
        renderTheUI();
        // update local storage
        saveToDos();
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
            // provide a listener for the checkbox
            checkbox.addEventListener('click', function() {
                // event.preventDefault();
                toDo.complete = !toDo.complete;
            });
            // create a span to wrap text of to-do
            const titleWrap = document.createElement('span');
            titleWrap.textContent = toDo.title;
            // create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            // provide a listener for the delete button
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
    // delete targeted to-do
    function deleteToDo(id) {
        toDos = toDos.filter(toDo => toDo.id !== id);
        renderTheUI();
        // update local storage
        updateLocalTodos();
    }
    // store toDos in local storage if possible
    function saveToDos() {
        if (window.localStorage) {
            localStorage.setItem('toDos', JSON.stringify(toDos));
        }
    }
    // retrieve toDos from local storage if possible
    function getToDos() {
        if (window.localStorage) {
            let storedToDos = null;
            if ((storedToDos = localStorage.getItem('toDos'))) {
                return JSON.parse(storedToDos);
            } else {
                return [];
            }
        }
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
