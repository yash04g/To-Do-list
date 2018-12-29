console.log("ToDoList Starts")
window.onload = function(){
    let addbtn = document.getElementById('addBtn')
    let tasklist = document.getElementById('taskList')
    let newtask = document.getElementById('text')
    function addTask(){
        let newtaskvalue = newtask.value
        let newtasklistitem = document.createElement('li')
        newtasklistitem.id = 'task_data'
        newtasklistitem.className = 'list-group-item my-2'
        tasklist.appendChild(newtasklistitem)
        //Span
        let spanelem = document.createElement('span')
        spanelem.className = 'task mx-4'
        spanelem.innerText = newtaskvalue
        spanelem.id = 'added_task'
        newtasklistitem.appendChild(spanelem)
        newtask.value = ''
        // DONE BUTTON
        let newbutton1 = document.createElement('button')
        newbutton1.id = 'button1'
        newbutton1.innerText = 'DONE'
        newbutton1.className = 'btn btn-success mx-2'
        newtasklistitem.appendChild(newbutton1)
        // DELETE BUTTON
        let newbutton2 = document.createElement('button')
        newbutton2.id = 'button2'
        newbutton2.innerText = 'DELETE'
        newbutton2.className = 'btn btn-danger mx-1'
        newtasklistitem.appendChild(newbutton2)    
        //Line-Through
        let donebtn = document.getElementById('button1')
        donebtn.onclick = function () {
            let line = document.getElementById('added_task')
            if (line.className.indexOf('done' === -1)) {
                line.className = 'task mx-4 done'
                donebtn.innerText = 'NOT DONE'
            }
            else {
                line.className = 'task mx-4'
                donebtn.innerText = 'DONE'
            }
        }

        //Deleting an element
        let deletebtn = document.getElementById('button2')
        deletebtn.onclick = function () {
            let elem = document.getElementById('task_data')
            elem.parentNode.removeChild(elem)
        }

    }
    addbtn.onclick = function(){
        addTask();
    }
    newtask.addEventListener('keypress',function (ev) {
        if(ev.keyCode == 13){
            addTask();
        }
    })
    // //Line-Through
    // let donebtn = document.getElementById('button1')
    // donebtn.onclick = function () {
    //     let line = document.getElementById('added_task')
    //     if (line.className.indexOf('done' === -1)) {
    //         line.className = 'task mx-4 done'
    //     }
    //     else {
    //         line.className = 'task mx-4'
    //     }
    // }
    // //Deleting an element
    // let deletebtn = document.getElementById('button2')
    // deletebtn.onclick = function (){
    //     let elem = document.getElementById('task_data')
    //     elem.parentNode.removeChild(elem)
    // }    
}
console.log("ToDoList Ends")
