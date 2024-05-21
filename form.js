console.log("hi")
let input;
document.getElementById("btn1").onclick = function(){
    console.log("btn clicked")
    alert("btn clicked")
    input = document.getElementById("User Name").value
    console.log(input)
    input = document.getElementById("Password").value
    console.log(input)
    input = document.getElementById("E-Mail").value
    console.log(input)
    input = document.getElementById("Register Number").value
    console.log(input)

    document.getElementById("heading").innerHTML = "btn triggerd"
}