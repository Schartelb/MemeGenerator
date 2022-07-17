const picinput = document.querySelector("#pic");

const meme = document.querySelector("#meme");
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


function changeTxtColor(){
bannertop.style.color = this.value
bannerbottom.style.color = this.value
return;
}

function topType(){
    bannertop.innerHTML=this.value;
}

function bottomType(){
    bannerbottom.innerHTML=this.value;
}

function placepicture(p){
    p.preventDefault()
//    createdivbox
    const urlString = "url ("+picinput.value+");"
    meme.style="background-image: "+urlString
    meme.setAttribute("width","400px");
    meme.setAttribute("height","400px");
    console.log(meme.clientWidth)
}
function createdivbox(){
     const newdiv = document.createElement("div")
     meme.append(newdiv)
     newdiv.setAttribute("class","meme")
     newdiv.setAttribute("id","meme")
}
