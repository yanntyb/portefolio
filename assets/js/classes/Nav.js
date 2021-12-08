class Nav{
    constructor(elem,scrollTop){
        this.elem = elem;
        this.scrollTop = scrollTop;
        this.event();
    }

    animate(change,animationElemName,durationElem,animationChildName,durationChild) {
        this.elem.dataset.change = change;
        this.elem.style.animationName = animationElemName;
        this.elem.style.animationDuration = durationElem;
        this.elem.style.animationFillMode = "forwards";
        for (let child of this.elem.children) {
            child.style.animationName = animationChildName;
            child.style.animationDuration = durationChild;
            child.style.animationFillMode = "forwards";
        }
    }


    event(){
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > this.scrollTop && this.elem.dataset.change !== "true"){
                this.animate("true","bg-toWhite","1000ms","color-toBlack","1000ms");
            }
            if(window.scrollY < this.scrollTop && this.elem.dataset.change === "true"){
                this.animate("false","bg-toRgb","1000ms","color-toWhite","1000ms")
            }
        });
    }
}

export {Nav};