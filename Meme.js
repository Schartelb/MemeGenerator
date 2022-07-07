const picinput = document.querySelector("#pic");
const textinput = document.querySelector("#textInput")
const meme = document.querySelector('#meme');
//HTML to be inserted as generator works
const topinput = "<input=text placeholder='Top Text' name='topText'>"
const bottominput = "<input=text placeholder='Bottom Text' name='bottomText'>"
const picdisplay = "<img = "+picinput.value+" alt='Your Meme'>"
// use form action to run TextboxLocation function
    // **Done** TextboxLocation reads id of selected
    // Puts Gray box where text to be located
    // **Done** creates 1 or 2 forms for text (top 1/bottom 1/both 2) 
function TextboxLocation(){
    const location = document.getElementById('text').value
    if (location == "Top"){
        const toptext = textinput.createElement("form")
        toptext.innerHTML = topinput
        
        return;
    }
    if (location == "Bottom"){
        const bottomtext = textinput.createElement("form")
        bottomtext.innerHTML = bottominput
        return;
    }
    if (location == "Both"){
        const toptext = textinput.createElement("form")
        toptext.innerHTML = topinput
        const bottomtext = textinput.createElement("form")
        bottomtext.innerHTML = bottominput
        return;
    }
}

function previewPic(){
    picinput = document.querySelector("#pic").value
    const pic = meme.createElement("image")
    pic.innerHTML = picdisplay
}





