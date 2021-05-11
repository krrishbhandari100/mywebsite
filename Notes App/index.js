let notescard = document.getElementById("notescard");
/* 
<div id="card">
    <div id="notesdata">Lorem ipsum dolor sit amet.</div>
</div> 
*/
fetchdata();

function adddata() {
    var notes = document.getElementById("notes").value;
    if (notes == "") {
        alert("The Note can't be empty")
    }
    else {
        if (localStorage.getItem("notes") == null) {
            var notesarray = [];
            notesarray.push(notes)
            localStorage.setItem("notes", JSON.stringify(notesarray))
        }
        else {
            var a = localStorage.getItem("notes");
            a = JSON.parse(a);
            a.push(notes);
            localStorage.setItem("notes", JSON.stringify(a))
        }
        fetchdata();
    }
}

function fetchdata() {
    if (localStorage.getItem("notes") == null) {
        notescard.innerHTML = "<marquee direction='right'><h2>Add Your Notes Here:</h2></marquee>";
    }
    else {
        var note = localStorage.getItem("notes");
        note = JSON.parse(note)
        var str = "";
        note.forEach(element => {
            str += `
        <div id="card">
            <div id="notesdata">${element}</div>
        </div> 
        `
        });
        notescard.innerHTML = str;
    }
}
function clearnotes() {
    if (confirm("Are you sure you want to delete all notes")) {
        localStorage.clear()
    }
    fetchdata();
}