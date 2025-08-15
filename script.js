let task = document.getElementById("task");
let btnSave = document.querySelector(".btn1");
let list = document.getElementById("list");
let btnNewDAy = document.querySelector(".bt2");

function addTask() {
    let taskValue = task.value;
    if(taskValue === "") {
        alert("Please Enter a Task");
    }
    else {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = taskValue;
        list.appendChild(li);
        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    task.value = "";
    saveDate()
}

btnSave.addEventListener("click", addTask);

list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveDate()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveDate()
    }
})

task.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        addTask()
    }
})



function saveDate() {
    localStorage.setItem("Lists", list.innerHTML)
}


function load() {
    btnNewDAy.addEventListener("click", function() {
        localStorage.clear()
        window.load()
    })
    list.innerHTML = localStorage.getItem("Lists")

}

load()

