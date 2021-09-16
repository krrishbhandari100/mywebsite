let page = window.location.search.slice(6);
let selector = document.querySelector("#selector");
let scrollbar = document.querySelector("#scrollbar");
scrollbar.style.display = 'none';

let pageno = 1;
getData(pageno);
window.addEventListener('scroll', (e) => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if ((scrollTop + clientHeight) >= scrollHeight) {
        scrollbar.style.display = 'block';
        setTimeout(() => {
            scrollbar.style.display = 'none';
            pageno = pageno + 1
            getData(pageno)
        }, 3000)
    }
})

function getData(page) {
    $.get(`https://gorest.co.in/public/v1/todos?page=${page}`, (data, status) => {
        let todo = data.data
        var str = '';
        for (let i = 0; i < todo.length; i++) {
            document.querySelector('.row').innerHTML += `
            <div class="col-md-4 mt-3">
                <div class="card" style="width: 18rem;">
                    <span>${todo[i].id}</span>
                    <div class="card-body">
                <h5 class="card-title">${todo[i].title}</h5>
                <p class="card-text">${todo[i].due_on}</p>
                </div>
                </div>
            </div>
            `;
        }
    })
}