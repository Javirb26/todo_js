window.onload = () => {
    let newSubmit = document.getElementById("new-todo-submit")
    let listContainer = document.getElementById('list-container')
    let ulStyle = document.getElementById("ul-style")
    newSubmit.onclick = (e) => {
        e.preventDefault()
        // Get the text from input field
        let newTodo = document.getElementById("new-todo").value;
        if(newTodo === ''){
            console.log('empty')
        } else {
            console.log(newTodo)
            let createListEl = document.createElement('li');
            createListEl.classList.add('list-group-item')
            createListEl.innerHTML = `<button class='btn btn-danger me-2' id='delete-btn'><i class="bi bi-trash"></i></button> ${newTodo}`;
            listContainer.appendChild(createListEl)
            ulStyle.classList.add("d-none-ul")
        }
    }
}
