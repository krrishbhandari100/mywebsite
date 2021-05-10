var user = window.location.search;
var user = user.slice(6)
// console.log(arr)
for (let i = 0; i < user.length; i++) {
    if(user[i]=="+"){
        var user = user.replace("+", " ")
    }
    else if(user[i]=="%"){
        var user = user.replace("%", "@")
    }
    
    else if(user[i]=="4"){
        var user = user.replace("40", "")
    }
    console.log(user)
}
document.getElementById("name").innerHTML = user;