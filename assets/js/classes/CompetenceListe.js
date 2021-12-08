import {Competence} from "./Competence";
import newExposure from "newexposure";
import isVisible from 'is-element-visible';

class CompetenceListe {
    constructor(parent) {
        this.parent = parent;
        this.child = [];
        this.div = null;
        this.display = false;
        this.__init__();
    }

    getData(dev){
        if(!dev){

        }
        else{
            this.createChild({
                1: {
                    "title": "rigoureux",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."
                },
                2: {
                    "title": "autonome",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."
                },
                3: {
                    "title": "polyvalent",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."
                },
                4: {
                    "title": "a l'écoute",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."
                },
                5: {
                    "title": "adaptation",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."
                },
                6: {
                    "title": "adaptation",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."
                },

            })
        }
    }

    createChild(data){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.id = "competence";
        newExposure.pushListeningEle(this.div, () => {
            if(!this.display){
                console.log(this.display);
                this.display = true;
                for(let i = 0; i <= Object.keys(data).length; i ++){
                    this.child.push(new Competence(this.div,i,data[i + 1]));
                }

            }
        },false);

    }

    __init__(){
        this.getData(true);
    }
}

export {CompetenceListe}
