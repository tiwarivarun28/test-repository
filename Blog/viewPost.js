var blogId=localStorage.getItem("blogId") ? JSON.parse(localStorage.getItem("blogId")) : ""

var parentElement=document.getElementById("root")

function displayData(data){
    parentElement.innerHTML=""

    var blogTitle=document.createElement("p")
    blogTitle.textContent="Title :" +data.title

    var blogDesc=document.createElement("p")
    blogDesc.textContent="Description :"+data.description

    var blogAuthor=document.createElement("p")
    blogAuthor.textContent="Author :" +data.first_name

    parentElement.append(blogTitle,blogDesc,blogAuthor)

    
}

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

loadData();