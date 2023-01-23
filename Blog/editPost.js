var blogId=localStorage.getItem("blogId") ? JSON.parse(localStorage.getItem("blogId")) : ""


async function loadData(){
    try{
        var res=await fetch("http://localhost:3000/blogs/"+blogId)
        var json=await res.json()
        displayData(json)
    }
    catch(e){
        console.log(e)
    }
}

function displayData(data){
    document.getElementById("title").value=data.title
    document.getElementById("body").value=data.description
    document.getElementById("author").value=data.first_name
}

var editBtn=document.getElementById("edit-blog-btn")

editBtn.addEventListener("click",async function(){
    var blogData={
        title:document.getElementById("title").value,
        description:document.getElementById("body").value,
        first_name:document.getElementById("author").value
    }
    try{
        var res=await fetch("http://localhost:3000/blogs/"+blogId,{
            method:"PATCH",
            body:JSON.stringify(blogData),
            headers:{
                "Content-Type" : "application/json"
            }
        })
    }
    catch(e){
        console.log(e)
    }
})

loadData();