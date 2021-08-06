
function onLoad(){
document.getElementById("bigFoot").src = "https://github.com/hackclub/hackclub/blob/master/workshops/find_bigfoot/assets/bigfoot.png?raw=true";


}

function moveBigfoot(){
    console.log("Whoo! Bigfoot is found");
var picture = document.getElementById("bigFoot");
var x = Math.random()*300;
var y = Math.random()*300;

picture.style.top = x +"px";
picture.style.left = y  + "px"
}

