const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

//load all event listeners

loadEventListeners();

function loadEventListeners(){

    //add event

    form.addEventListener("submit", addTask);
//remove task
    taskList.addEventListener("click", removeTask);

    //clear task event

    clearBtn.addEventListener("click", clearTasks);

    //filter

    filter.addEventListener("keyup", filterTask);
}

function addTask(e){
   if(taskInput.value === ''){
       alert("add a task..")
   } 

    //create li element

   const li = document.createElement("li");

   //add class
   li.className = "collection-item";

   //create textnode and append to li
   li.appendChild(document.createTextNode(taskInput.value));


   
    //create new link element
   const link = document.createElement("a");

    //add class
   link.className = 'delete-item secondary-content';
 
     //add icon html
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
//append the link to li
li.appendChild(link);

console.log(li)

 //append li to ul
 taskList.appendChild(li);

 //clear input

 taskInput.value = '';

       e.preventDefault()
}

//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("are you sure?")){     
        e.target.parentElement.parentElement.remove();
        }
    }

}

//clear tasks

function clearTasks(){
 while(taskList.firstChild){
     taskList.removeChild(taskList.firstChild);
 }
}

//filter tasks

function filterTask(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';

        } else{
            task.style.display='none';

        }
    });
}