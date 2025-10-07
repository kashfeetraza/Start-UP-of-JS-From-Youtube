//Selecting by Ids and Classes
// let boxs = document.getElementsByClassName("box")
// console.log(boxs);

// boxs[2].style.backgroundColor = "red";

// document.getElementById("long").style.backgroundColor = "green";

// document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})