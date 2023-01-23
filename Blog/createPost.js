var blogButton=document.getElementById("create-blog-btn")

blogButton.addEventListener("click",async function(){
    var blogData={
        title:document.getElementById("title").value,
        description:document.getElementById("body").value,
        first_name:document.getElementById("author").value
    }
    try{
        var res=await fetch("http://localhost:3000/blogs",{
            method:"POST",
            body:JSON.stringify(blogData),
            headers:{
                "Content-Type":"application/json"
            }
        })
        var json=await res.json()
        location.href="index.html"
    }
    catch(e){
        console.log(e)
    }

})