
// get the fancy class
const text = document.querySelector('.fancy');

// get the content of the fancy class
const strText  = text.textContent;

// split the content 
const splitText = strText.split("");

// remove the copy of the class
text.textContent = "";


// assign every letter into a span
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<em>" + splitText[i] + "</em>";
}



let char = 0; 
let timer = setInterval(onTick, 50);

function onTick(){
    const em = text.querySelectorAll('em')[char];
    em.classList.add('fadeAway');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}


function complete(){
    clearInterval(timer);
    timer = null;
}



