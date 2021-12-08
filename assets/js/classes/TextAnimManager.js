import {TextAnim} from "./TextAnim";

class TextAnimManager{
    constructor(parent,data){
        this.parent = parent;
        this.data = data;
        this.setAnim(1);
        this.child = [];
    }

    setAnim(index){

        new TextAnim(this.parent,this.data[index].title,this.data[index].speed,true, this.data[index].callback,1000)

        index ++;
        let len = 0
        for (let i = 0; i < this.data[index].title.length; i++) {
            len += this.data[index].title[i].length;
        }
        window.setInterval(() => {
            for(let child of this.child){
                child.remove();
            }
            window.setTimeout(() => {
                this.child.push(new TextAnim(this.parent,this.data[index].title,this.data[index].speed,true,() => {
                },1000));
                index++;
                if(index > Object.keys(this.data).length){
                    index = 1;
                }
            },2000)
        },len * this.data[index].speed * 1.5)
    }
}

export {TextAnimManager};