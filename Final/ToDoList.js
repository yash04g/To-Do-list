console.log('Start Here')
window.onload = function(){
    let addTask = document.getElementById('addTask')
    let addBtn = document.getElementById('addBtn')
    let taskList = document.getElementById('task-list')
    let sortBtn = document.getElementById('sortBtn')
    let clearBtn = document.getElementById('clearBtn')
    
    let tasks = []
    if(localStorage.list){
        tasks = JSON.parse(localStorage.list)
    }
    function refreshList(){
        localStorage.list = JSON.stringify(tasks)
        taskList.innerHTML = ""
        for(let i in tasks){
            let task = tasks[i]
            let li = document.createElement('li')
            li.className = 'list-group-item my-1'
            let div = document.createElement('div')
            div.className = task.done ? "row done":"row"

            let span = document.createElement('span')
            span.className = 'col py-1'
            span.innerText = task.name

            let liBtnDone = document.createElement('button')
            liBtnDone.innerText = task.done ? "❌" :"✔️"
            liBtnDone.className = 'btn btn-info col-2 mx-2'

            let liBtnDelete = document.createElement('button')
            liBtnDelete.innerText = 'DELETE'
            liBtnDelete.className = 'btn btn-danger col-2 mx-2'

            liBtnDone.onclick = function(){
                task.done = !task.done
                refreshList()
            }
            liBtnDelete.onclick = function(){
                tasks.splice(i,1)
                refreshList()
            }
            div.appendChild(span)
            div.appendChild(liBtnDone)
            div.appendChild(liBtnDelete)
            li.appendChild(div)
            taskList.appendChild(li)
        }
    }
    refreshList()
    function sortList(){
        tasks.sort(function(a,b){
            return a.done - b.done
        })
        refreshList()
    }
    function clearList(){
        tasks = tasks.filter(function(t){
            return !t.done
        })
        refreshList()
    }
    function addNewTask(){
        let taskName = addTask.value
        tasks.push({
            name: taskName,
            done: false
        })
        addTask.value = ""
        refreshList()
    }
    addBtn.onclick = function (){
        addNewTask()
    }
    addTask.onkeypress = function (ev){
        if(ev.keyCode == 13){
            addNewTask()
        }
    }
    sortBtn.onclick = function(){
        sortList()
    }
    clearBtn.onclick = function(){
        clearList()
    }
}