
function makeSound(key){
    switch(key){
            
        case "w":
            var w = new Audio("Sounds/tom-4.mp3");
            w.play();
        break;
        case "a":
            var a = new Audio("Sounds/tom-3.mp3");
            a.play();
        break;
        case "s":
            var s = new Audio("Sounds/tom-2.mp3");
            s.play();
        break;
        case "d":
            var d = new Audio("Sounds/tom-1.mp3");
            d.play();
        break;
        case "j":
            var j = new Audio("Sounds/snare.mp3");
            j.play();
        break;
        case "k":
            var k = new Audio("Sounds/kick-bass.mp3");
            k.play();
        break;
        case "l":
            var l = new Audio("Sounds/crash.mp3");
            l.play();
        break;
        default: console.log(buttonInnerHTML);f
    } 
}



for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

} 

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}
