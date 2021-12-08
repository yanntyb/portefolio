import {TextAnim} from "./TextAnim";

class Competence{
    constructor(parent,index,data) {
        this.parent = parent;
        this.index = index;
        this.div = null;
        this.data = data;
        this.__init__();
    }

    createDom(){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("competence");
        this.div.innerHTML =
            `
                <h1>${this.data.title}</h1>
                <div class="content"></div>
            `;
        this.div.style.display = "block";
        if(this.index % 2  === 0){
            this.div.style.animationName = "fadeinLeft";
            this.div.style.animationDuration = `${Math.floor(Math.random() * (3000 - 1100 + 1) + 1100)}ms`;
            this.div.style.animationFillMode = "forwards";
        }
        else{
            this.div.style.animationName = "fadeinRight";
            this.div.style.animationDuration = `${Math.floor(Math.random() * (3000 - 1100 + 1) + 1100)}ms`;
            this.div.style.animationFillMode = "forwards";
        }

        new TextAnim(this.div.querySelector(".content"),this.data.content,10);
    }

    __init__(){
        this.createDom();
    }
}

export {Competence};