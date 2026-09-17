
let input = document.querySelector('#taskInput');
let button = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList');

 button.addEventListener("click",function(){
   let taskText = input.value;
   if(taskText !== ""){
    let li = document.createElement('li');
     li.textContent = taskText;
     taskList.appendChild(li);
     input.value = "";
   }
 })