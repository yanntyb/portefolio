import {TextAnim} from "./TextAnim";

class Competence{
    constructor(parent,index,data, strictHtml = false) {
        this.parent = parent;
        this.index = index;
        this.div = null;
        this.data = data;
        this.strictHtml = strictHtml;
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
            this.animate("fadeinLeft");
        }
        else{
            this.animate("fadeinRight");
        }
        if(this.strictHtml === false){
            new TextAnim(this.div.querySelector(".content"),this.data.content,30);
        }
        else{
            for(let data of this.data.content){
                this.div.querySelector(".content").innerHTML += data;
            }
        }

    }

    animate(animationName){
        this.div.style.animationName = animationName;
        this.div.style.animationDuration = `${Math.floor(Math.random() * (3000 - 1100 + 1) + 1100)}ms`;
        this.div.style.animationFillMode = "forwards";
    }

    __init__(){
        this.createDom();
    }
}

export {Competence};