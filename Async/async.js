var container = document.getElementById("container");

async function getData() {
  var data = await fetch("https://reqres.in/api/users");
  var jsonData = await data.json();
  displayData(jsonData.data);
}

function displayData(data) {
  data.forEach((element) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = element.avatar;
    var email = document.createElement("p");
    var name = document.createElement("h3");
    name.textContent = element.first_name + " " + element.last;
    div.append(img, email, name);
    container.append(div);
  });
}

getData();
