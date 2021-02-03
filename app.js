
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo"); 

//Event listerners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo); 
todoList.addEventListener('click', deleteCheck);

// filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event){

    //prevents form from submitting
  event.preventDefault();
  // Todo div 
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
 
  //create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //Add todo list to loaclstorage
 saveLocalTodos(todoInput.value);

  //checked marl buttom
  const completedButton = document.createElement('button');
  completedButton.innerHTML='<i class="fa fa-check"arial-hidden="check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);



   //Delete button
   const trashButton =document.createElement('button');
   trashButton.innerHTML='<i class="fa fa-trash"arial-hidden="delete"></i>'
   trashButton.classList.add('delete-btn');
   todoDiv.appendChild(trashButton);


   
    //clear /check todo input value
   if(todoInput.value === ""){
       alert("Please enter a Task");
   }else{
    todoInput.value = "";
        //Append To list
     todoList.appendChild(todoDiv);
   }
}





//delete and check function 
function deleteCheck(e){
  const item = e.target;
  //delete todo
  if(item.classList[0]=== "delete-btn"){
    const todo = item.parentElement;
    removeLocalTodos(todo);
        todo.remove();
       
  }

  //checkmark

  if(item.classList[0] === 'complete-btn'){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
     
  }
 
}
//filter todo Function

// function filterTodo(e){
//    const todos = todoList.childNodes;
//    todos.forEach(function(todo){
//      switch(e.target.value){
//          case "all":
//             todo.style.display ="flex";
//              break;
//              case "completed":
//                  if(todo.classList.contains("completed")){
//                      todo.style.display ="flex";
//                  }else{
//                      todo.style.display = "none";
//                  }
//                  break;
//                  case "uncompleted":
//                      if(!todo.classList.contains("completed")){
//                         todo.style.display ="flex";
//                      }else{
//                         todo.style.display = "none";
//                      }
//                      break;
//      }
//    });
// } 


 function saveLocalTodos(todo){
     //check
     let todos;
     if(localStorage.getItem('todos') === null){
         todos =[];
     }else{
         todos = JSON.parse(localStorage.getItem('todos'));
     }
     todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(todos));
 }


function getTodos(){
    let todos = todoInput.value;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
 
  //create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //checked marl buttom
  const completedButton =document.createElement('button');
  completedButton.innerHTML='<i class="fa fa-check"arial-hidden="check"></i>'//i tag button can be added
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);


   //Delete button
   const trashButton =document.createElement('button');
   trashButton.innerHTML='<i class="fa fa-trash"arial-hidden="delete"></i>'//i tag button can be added
   trashButton.classList.add('delete-btn');
   todoDiv.appendChild(trashButton);


    //Append To list
    todoList.appendChild(todoDiv);
    });
}
   function removeLocalTodos(todo){
       //check if items already exist 
       let todos;
       if(localStorage.getItem("todos") === null){
           todos = [];
       }else{
           todos = JSON.parse(localStorage.getItem("todos"));
       }
       const todoIndex = todo.children[0].innerText;
       todos.splice(todos.indexOf(todoIndex), 1);
       localStorage.setItem("todos", JSON.stringify(todos));
   }

      