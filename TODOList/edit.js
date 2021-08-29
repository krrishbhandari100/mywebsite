let sno = window.location.search.slice(5);
// alert(sno)

let todos = JSON.parse(localStorage.getItem('todos'))

let todo_to_edit = todos[sno-1];
document.getElementById('title').value = todo_to_edit['title']
document.getElementById('desc').value = todo_to_edit['description']

const editodo = () =>{
    todos[sno-1]['title'] = document.getElementById('title').value
    todos[sno-1]['description'] = document.getElementById('desc').value
    localStorage.setItem('todos', JSON.stringify(todos))
    alert("Edit Successful!")
    window.location = '/'
}