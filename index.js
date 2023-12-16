document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("add");
  const title = document.getElementById("title");
  const description = document.getElementById("description");


  btn.onclick = function(){
    console.log("title = ", title.value)
    console.log("description = ", description.value)
  }
})

