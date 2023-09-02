var unknown = document.querySelector("h5");
var addFriend = document.querySelector("#add-frd");
var remove=document.querySelector("#Rvm");

addFriend.addEventListener("click", function(){
    unknown.innerHTML = "Friends";
    unknown.style.color="Green";
})

remove.addEventListener("click", function(){
    unknown.innerHTML = "Unknown";
    unknown.style.color="Red";
})