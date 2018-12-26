console.log("ToDoList Starts")
window.onload = function(){
    let addbtn = document.getElementById('addBtn')
    let tasklist = document.getElementById('taskList')
    let newtask = document.getElementById('text')
    function addTask(){
        let newtaskvalue = newtask.value
        let newtasklistitem = document.createElement('li')

        newtasklistitem.innerText = newtaskvalue
        newtasklistitem.className = "list-group-item my-2"
        newtasklistitem.onclick = function(e){
            if(e.target.className.indexOf('disabled'== -1)){
                e.target.className = "list-group-item my-2 disabled"
            }
            else{
                e.target.className = "list-group-item my-2"
            }}
        tasklist.appendChild(newtasklistitem)
        newtask.value = ""
    }
    addbtn.onclick = function (){
        addTask();
    }
    newtask.addEventListener('keypress',function(ev){
        if(ev.keyCode == 13){
            addTask();
        }
    })
}
console.log("ToDoList Ends")