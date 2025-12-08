const checkbox = document.querySelectorAll("#age");


checkbox[0].onclick = function(){
    alert("18+ was clicked!");
}
checkbox[1].onclick = function(){
    alert("Less than 18 was clicked! You are still welcome to see the photos");
}