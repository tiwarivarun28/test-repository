document.querySelector("form").addEventListener("submit",myTodo)

function myTodo(){
    event.preventDefault();
    var task=document.getElementById("task").value
    var priority=document.getElementById("priority").value

    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.textContent=task;
    var td2=document.createElement("td")
    td2.textContent=priority;
    if(priority=="High"){
      //  td2.style.backgroundColor="crimson";
      td2.setAttribute("id","high") 
    }
    else{
      //  td2.style.backgroundColor="seagreen";
      td2.setAttribute("id","low") 
    }

    var td3=document.createElement("td")
    td3.textContent="delete";
    td3.addEventListener("click", deleteTask)

    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr) 


}
function deleteTask(){
    event.target.parentNode.remove();
}


