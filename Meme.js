const picinput = document.querySelector("#pic");
let pic=0

window.addEventListener('DOMContentLoaded',function(){
    // createdivbox()
    
    })


const form = document.querySelector('form')
form.addEventListener("submit",function(p){
    if(pic<1){
        placepicture(p);
        pic++;
    }else{
        flatten()
        placepicture(p)
        picinput.value = ""
    }
})

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
    // textResize()
}

const bottomtext = document.querySelector("#bottom")
bottomtext.addEventListener("keyup",bottomType)
function bottomType(){
    const bannerbottom = document.querySelector("#bottomtext")
    bannerbottom.innerHTML=this.value;
    bottomtextResize(bannerbottom)
}

function bottomtextResize(bannerbottom){
    // console.log(bannerbottom.length)
    return
}

 function placepicture(p){
    p.preventDefault()
    createdivbox()
    const meme= document.querySelector("#meme")
    const bkgdstring = 'background-image: url('+picinput.value+');'
    meme.style.cssText += bkgdstring+'width:800px;height: 450px;background-size:contain;id: meme;class: meme'
    // const img=document.createElement("img")
    // meme.append(img)
    // img.setAttribute("url",picinput.value)
    // img.setAttribute("class","meme")
    // img.style.cssText += 'width:'+img.clientWidth+'px;height:'+img.clientHeight+'px;'
    const newdiv = document.getElementById("meme")
    newtopdiv(newdiv)
    newbottomdiv(newdiv)
}

function flatten(){
    const meme= document.querySelector("#meme")
    meme.setAttribute("class","flat")
    meme.setAttribute("id","")
    const flatTop = document.querySelector("#toptext");
    flatTop.setAttribute("class","flattop")
    flatTop.setAttribute("id","")
    toptext.value = ""
    const flatBot = document.querySelector("#bottomtext");
    flatBot.setAttribute("class","flatbottom")
    flatBot.setAttribute("id","")
    bottomtext.value = ""
}

function createdivbox(){
    const newdiv = document.createElement("div")
     const body = document.querySelector("body")
     newdiv.setAttribute("class","meme")
     newdiv.setAttribute("id","meme")
     body.appendChild(newdiv)
     return;
}
function newtopdiv(newdiv){
    const newtop = document.createElement("div");
    newtop.setAttribute("class","toptext")
    newtop.setAttribute("id","toptext")
    newdiv.appendChild(newtop)
    return newtop;
}

function newbottomdiv(newdiv){
    const newbottom = document.createElement("div");
    newbottom.setAttribute("class","bottomtext")
    newbottom.setAttribute("id","bottomtext")
    newbottom.setAttribute("style","color:white")
    newdiv.appendChild(newbottom)
    return newbottom;
}