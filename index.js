let tasks = [];
let count = 0;
let todolistout = document.getElementById("to-do-list-out");
let containerAItem = document.getElementById("add-item");
function addTask() {
    const inputText= document.getElementById("input-text");
    const inputDate = document.getElementById("input-date");
    const inputSelect = document.getElementById("input-select");
    if (inputText.value === '' || inputDate.value === '' || inputSelect.value === "Select") {
        alert('You have to enter all input');
    }
    else {
        tasks.push({id: count, todo: inputText.value, deadline: inputDate.value, statuss: inputSelect.value});
        count++;
        sharedFunc();
    }
}

function addWindows() {
    let AddIn = document.getElementById("add-in");

    let H2 = document.createElement("h2");
    H2.innerHTML = 'Add new tasks';
    AddIn.appendChild(H2);

    let inText = document.createElement("input");
    inText.type = "text";
    inText.placeholder= "Add to do";
    inText.id= "input-text";
    AddIn.appendChild(inText);

    let inDate = document.createElement("input");
    inDate.type = "date";
    inDate.id= "input-date";
    AddIn.appendChild(inDate);
     
    var array = ["Select","Not Started","In Progress","Done"];
    let inSelect = document.createElement("select");
    inSelect.id= "input-select";

    AddIn.appendChild(inSelect);

    for(var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        inSelect.appendChild(option);
    }



    let newDiv = document.createElement("div");
    newDiv.classList.add("add-in-button");

    let buttonSave = newDiv.appendChild(document.createElement("button"));
    
    buttonSave.innerHTML = 'Save';
    buttonSave.addEventListener('click', addTask);
  
    
    let buttonCancel = newDiv.appendChild(document.createElement("button"));
    buttonCancel.addEventListener('click', () => {
        AddIn.remove();
        let addin = document.createElement("div");
        addin.classList.add('add-in');
        addin.id = "add-in";
        containerAItem.appendChild(addin);
    });
    buttonCancel.innerHTML = 'Cancel';
   
    AddIn.appendChild(newDiv);
}


function EditWindows(number) {
    console.log(number);
    let AddIn = document.getElementById("add-in");

    let H2 = document.createElement("h2");
    H2.innerHTML = 'Edit task';
    AddIn.appendChild(H2);

    let inText = document.createElement("input");
    inText.type = "text";
    inText.placeholder= "Add to do";
    inText.id= "edit-text";
    inText.value = tasks[number].todo;
    AddIn.appendChild(inText);

    let inDate = document.createElement("input");
    inDate.type = "date";
    inDate.id= "edit-date";
    inDate.value = tasks[number].deadline;
    AddIn.appendChild(inDate);
     
    var array = ["Select","Not Started","In Progress","Done"];
    let inSelect = document.createElement("select");
    inSelect.id= "edit-select";
    inSelect.value = tasks[number].statuss;
    AddIn.appendChild(inSelect);

    for(var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        inSelect.appendChild(option);
    }

    let editTaskbutton = document.createElement("div");
    editTaskbutton.classList.add("edit-in-button");

    let DeleteTaskbutton = editTaskbutton.appendChild(document.createElement("div"));
    DeleteTaskbutton.classList.add("edit-in-button-delete");

    let deletebutton = DeleteTaskbutton.appendChild(document.createElement("button"));
    deletebutton.innerHTML= 'Delete';
    deletebutton.addEventListener('click', function() {
       DeleteTask(number)
    });

    let newDiv = editTaskbutton.appendChild(document.createElement("div"));
    newDiv.classList.add("edit-in-button-edit");

    let buttonEdit = newDiv.appendChild(document.createElement("button"));
    
    buttonEdit.innerHTML = 'Edit';
    buttonEdit.addEventListener('click', function() {
       editTask(number)
    });
  
    
    let buttonCancel = newDiv.appendChild(document.createElement("button"));
    buttonCancel.addEventListener('click', () => {
        AddIn.remove();
        let addin = document.createElement("div");
        addin.classList.add('add-in');
        addin.id = "add-in";
        containerAItem.appendChild(addin);
    });
    buttonCancel.innerHTML = 'Cancel';
   
    AddIn.appendChild(editTaskbutton);
}



function editTask(num) {
    const inputText= document.getElementById("edit-text");
    const inputDate = document.getElementById("edit-date");
    const inputSelect = document.getElementById("edit-select");
    if (inputText.value === '' || inputDate.value === '' || inputSelect.value === "Select") {
        alert('You have to enter all input');
    }
    else {
        tasks[num] = {id: tasks[num].id , todo: inputText.value , deadline: inputDate.value, statuss: inputSelect.value};
        sharedFunc();
    }
}

function DeleteTask(num) {
    tasks.splice(num,1);
    sharedFunc();
}

function sharedFunc() {
    let AddIn = document.getElementById("add-in");
        AddIn.remove();
        let addin = document.createElement("div");
        addin.classList.add('add-in');
        addin.id = "add-in";
        containerAItem.appendChild(addin);

       let Todolist = document.getElementById("to-do-list");
       Todolist.remove();
       let todol = document.createElement("div");
        todol.id = "to-do-list";
        todolistout.appendChild(todol);
        Todolist = document.getElementById("to-do-list");

       for(let i = 0; i<tasks.length; i++) {
        let containerdiv = document.createElement("div");
        containerdiv.classList.add("to-do-list");

        let newdiv = containerdiv.appendChild(document.createElement("div"));
        newdiv.classList.add("to-do-list-in");

        let firstp = newdiv.appendChild(document.createElement("p"));
        let bold = firstp.appendChild(document.createElement("b"));
        bold.innerHTML = tasks[i].todo;
        
        let secondp = newdiv.appendChild(document.createElement("p"));
        let italic = secondp.appendChild(document.createElement("i"));
        italic.innerHTML = "Deadline: " + tasks[i].deadline;

        let thirdp = newdiv.appendChild(document.createElement("p"));
        thirdp.innerHTML = "Status: " + tasks[i].statuss;
        
        let buttonEditDiv =  containerdiv.appendChild(document.createElement("div"));
        buttonEditDiv.classList.add("to-do-edit-button");

        let buttonEdit = buttonEditDiv.appendChild(document.createElement("button"));
        buttonEdit.innerHTML = 'Edit';
        buttonEdit.addEventListener('click',function() {
            EditWindows(i);
        });

        Todolist.appendChild(containerdiv); }
}

function clearTask() {
        let Todolist = document.getElementById("to-do-list");
        Todolist.remove();
        let todol = document.createElement("div");
        todol.id = "to-do-list";
        todolistout.appendChild(todol);
        Todolist = document.getElementById("to-do-list");
        tasks = [];
}