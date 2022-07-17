const picinput = document.querySelector("#pic");


window.addEventListener('DOMContentLoaded',function(){
    createdivbox()
    })


const form = document.querySelector('form')
form.addEventListener("submit",placepicture)

const textcolor = document.querySelector("#textcolor")
textcolor.addEventListener("input",changeTxtColor)


function changeTxtColor(){
document.querySelector("#toptext").style.color = this.value
document.querySelector("#bottomtext").style.color = this.value
return;
}
const toptext = document.querySelector("#top")
toptext.addEventListener("keyup",topType)
function topType(){
    const bannertop = document.querySelector("#toptext")
    bannertop.innerHTML=this.value;
}
const bottomtext = document.querySelector("#bottom")
bottomtext.addEventListener("keyup",bottomType)
function bottomType(){
    const bannerbottom = document.querySelector("#bottomtext")
    bannerbottom.innerHTML=this.value;
}

 function placepicture(p){
    p.preventDefault()
    createdivbox
    const bkgdstring = 'background-image: url('+picinput.value+');'
    meme.style.cssText += bkgdstring+'height: 400px;width:450px;id: meme;class: meme'
}

function createdivbox(){
     const newdiv = document.createElement("div")
     const body = document.querySelector("body")
     newdiv.setAttribute("class","meme")
     newdiv.setAttribute("id","meme")

     body.append(newdiv)
     return;
}
function newtopdiv(newdiv){
    const newtop = document.createElement("div");
    newtop.setAttribute("class","toptext")
    newtop.setAttribute("id","toptext")
    newtop.setAttribute("style","color:white")
    newdiv.append(newtop)
    return newtop;
}

function newbottomdiv(newdiv){
    const newbottom = document.createElement("div");
    newbottom.setAttribute("class","bottomtext")
    newbottom.setAttribute("id","bottomtext")
    newbottom.setAttribute("style","color:white")
    newdiv.append(newbottom)
    return newbottom;
}