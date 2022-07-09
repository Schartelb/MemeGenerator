const picinput = document.querySelector("#pic");
const textinput = document.querySelector("#textInput");
const preview = document.querySelector("#memeinput");
const meme = document.querySelector('#meme');

const picdisplay = "<img src="+ picinput.value +" class='meme' alt='Your Meme'>"
// use form action to run TextboxLocation function
    // **Done** TextboxLocation reads id of selected
    // ?? Puts Gray box where text to be located  
const toptext = document.querySelector("#top")
const bottomtext = document.querySelector("#bottom")

meme.addEventListener("load",function(){
    JSON.parse(localStorage('picURL','imgHTML'))
    meme.innerHTML=imgHTML
})
function TextboxLocation(){
    if(bottomtext.value === "" ){ //outputs top text only
        console.log(toptext.value)
        
        //maketop(toptext)
        return;
    }else if( toptext.value != "" && bottomtext.value!=""){//outputs both lines
        console.log(toptext.value)
        console.log(bottomtext.value)
        //maketop(toptext)
        //makebottom(bottomtext)
        return;
    }else
        console.log(bottomtext.value) //outputs bottom line
        //makebottom(bottomtext)
        return;
}
// picinput.addEventListener("submit",placepicture)
function placepicture(p){
    p.preventDefault()
    localStorage.setItem("picURL",JSON.stringify(picinput.value))
    localStorage.setItem("imgHTML",JSON.stringify(picdisplay))
    console.log(picinput.value, picdisplay)
    // const pic = document.createElement("img")
    // pic.innerHTML = picdisplay
    // meme.appendChild(pic);
    // meme.className(meme)
}

function Creatememe(){ //puts everything together to create Meme
    TextboxLocation
    placepicture


}





