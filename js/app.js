document.getElementById('button').addEventListener("click",change)

function change(){
    
    let reel1 = Math.floor(Math.random() * 3);
    let reel2 = Math.floor(Math.random() * 3);
    let reel3 = Math.floor(Math.random() * 3);
if(reel1 == 0){
    document.getElementById("reel1").src="images/lemon.png"
}else if(reel1 == 1){
    document.getElementById("reel1").src="images/orange.png"
}else{
    document.getElementById("reel1").src="images/watermelon.png"
}
if(reel2 == 0){
    document.getElementById("reel2").src="images/lemon.png"
}else if(reel2 == 1){
    document.getElementById("reel2").src="images/orange.png"
}else{
    document.getElementById("reel2").src="images/watermelon.png"
}
if(reel3 == 0){
    document.getElementById("reel3").src="images/lemon.png"
}else if(reel3 == 1){
    document.getElementById("reel3").src="images/orange.png"
}else{
    document.getElementById("reel3").src="images/watermelon.png"
}
}