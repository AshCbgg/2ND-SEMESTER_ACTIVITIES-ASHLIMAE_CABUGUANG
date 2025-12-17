//console.log("Welcome, to JavaScript World!");

//Change text content
document.getElementById("btnText").addEventListener("click", function() {
    document.getElementById("demo").textContent="Text changed successfully";
});

//Change text color
document.getElementById("btnColor").addEventListener("click", function() {
    const div=document.getElementById("myDiv");
    div.style.color="blue";
});

//Show and hide the div
document.getElementById("btnHide").addEventListener("click", function (){
    document.getElementById("myDiv").style.display = "none";
});

document.getElementById("btnShow").addEventListener("click", function(){
    document.getElementById("myDiv").style.display = "block";
});

//change image source
document.getElementById("btnImage").addEventListener("click", function(){
    const img = document.getElementById("myImage");
    img.src = img.src.includes(".images/img1.png") ?
        "./images/img1.png" : "./images/img2.png";
});

//show alerts
document.getElementById("btnAlert").addEventListener("click", function(){
    alert("Welcome to JavaScript!");
});

console.log("Script loaded successfully!");