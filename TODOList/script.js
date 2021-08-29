if(!JSON.parse(localStorage.getItem('todos'))){
    localStorage.setItem('todos', '[]')
}
else{
    console.log("Todos are not actually blank")
}
const addtodo = ()=>{
    let todos = localStorage.getItem('todos');
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;
    if(JSON.parse(todos).length == 0){
        let Alltodos = []
        let todoItem = {
            "sno": 1,
            "title": title,
            "description": description,
        }
        Alltodos.push(todoItem)
        localStorage.setItem('todos', JSON.stringify(Alltodos))
        fetchtodo();
    }
    else{
        var Alltodos = JSON.parse(localStorage.getItem('todos'));
        let todoItem = {
            "sno": Alltodos[parseInt(Alltodos.length)-1]['sno'] + 1 || 1,
            "title": title,
            "description": description,
        }
        Alltodos.push(todoItem);
        localStorage.setItem('todos', JSON.stringify(Alltodos));
        fetchtodo();
    }
}

const fetchtodo = () =>{
    let Alltodocontents = [];
    let todos = JSON.parse(localStorage.getItem('todos'))
    var str = ""
    // console.log(JSON.parse(localStorage.getItem('todos')))
    for (let i = 0; i < todos.length; i++) {
        Alltodocontents.push(todos[i])
    }

    if(JSON.parse(localStorage.getItem('todos')).length !== 0){
        console.log('1')
        Alltodocontents.forEach(todo => {
            str += `
            <tr>
            <td>${todo['sno']}</td>
            <td>${todo['title']}</td>
            <td>${todo['description']}</td>
            <td><button class="btn btn-danger btn-sm" onclick='deletetodo(${todo['sno']})'>Delete</button></td>
            <td><a href="edit.html?sno=${todo['sno']}" class="btn btn-success btn-sm">Edit</a></td>
            </tr>
            `;
            document.querySelector('#tbody').innerHTML = str
        });
        console.log(Alltodocontents)
    }
    else{
        console.log('2')
        str = '';
        document.querySelector('#tbody').innerHTML = str
    }
}

const deletetodo = (sno) =>{
    const filteredtodo = JSON.parse(localStorage.getItem('todos')).filter((todo) => todo.sno !== parseInt(sno));
    localStorage.setItem('todos', JSON.stringify(filteredtodo))
    fetchtodo();
}

fetchtodo();