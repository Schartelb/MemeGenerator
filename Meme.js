const picinput = document.querySelector("#pic");
const textinput = document.querySelector("#textInput");
const meme = document.querySelector('#clearmeme');
const clearmeme =document.querySelector('#clearmeme');
const form = document.querySelector('form')
form.addEventListener("submit",placepicture)

// use form action to run TextboxLocation function
    // **Done** TextboxLocation reads id of selected
    // ?? Puts Gray box where text to be located  
const toptext = document.querySelector("#top")
toptext.addEventListener("keyup",topType)
const bottomtext = document.querySelector("#bottom")
bottomtext.addEventListener("Change",bottomType)

//window.addEventListener("load",function(){
 //   let memeinnerHTML = this.localStorage.getItem('imgHTML')
//    meme.innerHTML=memeinnerHTML
//    let picURL = this.localStorage.getItem('picURL')
//    picinput.value = picURL
//})


function topType(){
    console.log(this.value)
    bannertop=this.value;
    ctx.fillRect(0,0,meme.width,meme.height)
    ctx.fillText(bannertop,50,50)
}
function bottomType(){

}

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

function placepicture(p){
    p.preventDefault()
    clearmeme.src=picinput.value
    clearmeme.setAttribute("width",clearmeme.width)
    clearmeme.setAttribute("height",clearmeme.height)
    
//    let ctx = meme.getContext('2d')
//    ctx.drawImage(Image,10,10);
}

function Creatememe(){ //puts everything together to create Meme
    TextboxLocation
    placepicture


}





