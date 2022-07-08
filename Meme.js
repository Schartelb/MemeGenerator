const picinput = document.querySelector("#pic");
const textinput = document.querySelector("#textInput");
const preview = document.querySelector("#memeinput");
const meme = document.querySelector('#meme');
//HTML to be inserted as generator works
const topinput = "<class='form-inline' input='text' placeholder='Top Text' name='topText'>"
const bottominput = "<class='form-inline' input='text' placeholder='Bottom Text' name='bottomText'>"
const picdisplay = "<img = "+picinput.value+" class='meme' alt='Your Meme'>"
// use form action to run TextboxLocation function
    // **Done** TextboxLocation reads id of selected
    // ?? Puts Gray box where text to be located  
    // **Done** creates 1 or 2 forms for text (top 1/bottom 1/both 2) 
function TextboxLocation(){
    const location = document.getElementById('text').value
    if (location == "Top"){ //should create a singular text input form placeholder Top Text
        const toptext = textinput.createElement("form")
        toptext.innerHTML = topinput
        //need to append child
        return;
    }
    if (location == "Bottom"){//should create a singular text input form placeholder Bottom Text
        const bottomtext = textinput.createElement("form")
        bottomtext.innerHTML = bottominput
        return;
        //need to append child
    }
    if (location == "Both"){ //should create both input forms for text
        const toptext = textinput.createElement("form")
        toptext.innerHTML = topinput
        const bottomtext = textinput.createElement("form")
        bottomtext.innerHTML = bottominput
        //need to append children
        return;
    }
}

function previewPic(){ //creates preview thumbnail of image
    picinput = document.querySelector("#pic").value
    const pic = preview.createElement("img")
    pic.innerHTML = picdisplay
}

function generatememe(e){ //puts everything together to create Meme
    e.preventDefault()

    //needs values for Text Location and Image at minimum
    //on Submit - Place IMG, place textboxes, place text.

}





