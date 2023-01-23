// fetch("http://localhost:3000/blogs")
// .then(function(res){
// return res.json()
// }).then(function(jsondata){
//     console.log(jsondata)
// })

var table_body=document.getElementById("table-body")

async function loadData(){
    try{
        let data=await fetch("http://localhost:3000/blogs")
        let jsonData=await data.json()
        displayData(jsonData)
    }
    catch(e){
        console.log("error")

    }
}
function displayData(data){
    table_body.innerHTML=""
    data.forEach(function(ele){
        var blogRow=document.createElement("tr")

        var td1=document.createElement("td")
        td1.textContent=ele.id

        var td2=document.createElement("td")
        td2.textContent=ele.title

        var td3=document.createElement("td")
        td3.innerText=ele.first_name

        var td4=document.createElement("td")
        var viewBtn=document.createElement("button")
        viewBtn.textContent="VIEW"
        td4.append(viewBtn)
        viewBtn.onclick=function(){
            localStorage.setItem("blogId",ele.id)
            location.href="viewPost.html"
        }

        var td5=document.createElement("td")
        var editBtn=document.createElement("button")
        editBtn.textContent="EDIT"
        td5.append(editBtn)
        editBtn.onclick=function(){
            localStorage.setItem("blogId",ele.id)
            location.href="editPost.html"
        }

        var td6=document.createElement("td")
        var delBtn=document.createElement("button")
        delBtn.textContent="DELETE"
        td6.append(delBtn)
        delBtn.onclick=function(){
            deleteData("http://localhost:3000/blogs/" + ele.id)
            loadData();
        }

        blogRow.append(td1,td2,td3,td4,td5,td6)
        table_body.append(blogRow)
        
    });

}

async function deleteData(url){
    try{
        let data=await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            }
        })
        let json=await data.json()
    }
    catch(e){

    }
}




loadData()