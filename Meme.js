const picinput = document.querySelector("#pic");
const textinput = document.querySelector("#textInput");
const meme = document.querySelector("img");
//const clearmeme =document.querySelector('#clearmeme');
const form = document.querySelector('form')
form.addEventListener("submit",placepicture)

const toptext = document.querySelector("#top")
toptext.addEventListener("keyup",topType)
const bannertop = document.querySelector("#toptext")
const bottomtext = document.querySelector("#bottom")
bottomtext.addEventListener("keyup",bottomType)
const bannerbottom = document.querySelector("#bottomtext")

const textcolor = document.querySelector("#textcolor")
textcolor.addEventListener("input",changeTxtColor)

//window.addEventListener("load",function(){
 //   let memeinnerHTML = this.localStorage.getItem('imgHTML')
//    meme.innerHTML=memeinnerHTML
//    let picURL = this.localStorage.getItem('picURL')
//    picinput.value = picURL
//})
function changeTxtColor(){
bannertop.style.color = this.value
bannerbottom.style.color = this.value
return;
}

function topType(){
    changeTxtColor
    // console.log(this.value)
    bannertop.innerHTML=this.value;
    //bannertop.setAttribute("font-size","calc(.5 * "+meme.width+" / "+bannertop.innerHTML.length+"")
    
    // ctx.fillRect(0,0,meme.width,meme.height)
    // ctx.fillText(bannertop,50,50)
}
function bottomType(){
    changeTxtColor
    // console.log(this.value)
    bannerbottom.innerHTML=this.value;
    //bannerbottom.setAttribute("font-size","calc(.5 * "+meme.width+" / "+bannerbottom.innerHTML.length+"")
    
    // ctx.fillRect(0,0,meme.width,meme.height)
    // ctx.fillText(bannerbottom,50,50)
}
//Artifact from initial attempts at textbox locating
// function TextboxLocation(){
//     if(bottomtext.value === "" ){ //outputs top text only
//         console.log(toptext.value)
        
//         //maketop(toptext)
//         return;
//     }else if( toptext.value != "" && bottomtext.value!=""){//outputs both lines
//         console.log(toptext.value)
//         console.log(bottomtext.value)
//         //maketop(toptext)
//         //makebottom(bottomtext)
//         return;
//     }else
//         console.log(bottomtext.value) //outputs bottom line
//         //makebottom(bottomtext)
//         return;
// }

function placepicture(p){
    p.preventDefault()
    meme.src=picinput.value
    console.log(meme.clientWidth)
//Artifact from Canvas Attempt
// clearmeme.setAttribute("width",clearmeme.width)
// clearmeme.setAttribute("height",clearmeme.height)
//    let ctx = meme.getContext('2d')
//    ctx.drawImage(Image,10,10);
}

//Artifact from separate Image/Text submits
// function Creatememe(){ //puts everything together to create Meme
//     TextboxLocation
//     placepicture
// }





