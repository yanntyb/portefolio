class TextAnim {
    /**
     * content with $ result in a <br>
     * @param parent div to be append
     * @param content text to display
     * @param speed milliseconde before each step
     */
    constructor(parent, content, speed) {
        this.parent = parent;
        this.content = content;
        this.speed = speed;
        this.div = null;
        this.span = [];
        this.index = 0;
        this.len = 0;
        this.__init__();
    }

    createDom() {
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("main-title");
        for(let char of this.content){
            if(char === "$"){
                this.div.innerHTML += "<br>";
            }
            else{
                const span = document.createElement("span");
                this.div.appendChild(span);
                span.innerHTML = char;
                this.span.push(span);
                this.len++;
            }
        }
    }

    animIn() {
        this.interval = window.setInterval(() =>
        {
            const char = this.span[this.index];
            console.log(char.innerHTML);
            char.style.animationName = "fadein";
            char.style.animationDuration = `${this.speed}ms`;
            char.style.animationFillMode = "forwards";
            this.index++;
            if(this.index === this.len){
                window.setTimeout(() => {
                    //this.clearDom();
                },this.speed + 100);
                clearInterval(this.interval);

            }
        }, this.speed);
    }

    clearDom(){
        for(let span of this.span){
            this.div.innerHTML = this.content.replace("$","<br>");
            span.remove();
        }
    }

    __init__() {
        this.createDom();
        this.animIn();
    }
}

export {TextAnim};