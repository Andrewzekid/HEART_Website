const Typewriter = function(txtElement,words, wait=3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

document.addEventListener("DOMContentLoaded",init);

//type method
Typewriter.prototype.type = function() {
    //current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of words
    const fulltxt = this.words[current];
    //check deleting
    if (this.isDeleting) {
        
        //remove char
        this.txt = fulltxt.substring(0,this.txt.length - 1);
    } else {
        //add char
        this.txt = fulltxt.substring(0,this.txt.length + 1);
    }
    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //type speed 
    let initTypeSpeed = 200;
    if(this.isDeleting) {
        initTypeSpeed /= 2;
    }

    //check if word is complete
    if(!this.isDeleting  && this.txt === fulltxt) {
        //@ause
        initTypeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        //Pause
        initTypeSpeed = 200;
    }
    setTimeout(() => this.type(),initTypeSpeed);
}

//Init app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    //initialize typewriter
    new Typewriter(txtElement,words,wait);
}