import {Competence} from "./Competence";
import newExposure from "newexposure";
import isVisible from 'is-element-visible';

class CompetenceListe {
    constructor(parent,api) {
        this.parent = parent;
        this.child = [];
        this.div = null;
        this.display = false;
        this.api = api;
        this.__init__();
    }

    getData(dev){
        if(!dev){

        }
        else{
            switch(this.api){
                case "competence":
                    const dataComp = {
                        1: {
                            "title": "rigoureux",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        2: {
                            "title": "autonome",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        3: {
                            "title": "polyvalent",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        4: {
                            "title": "a l'écoute",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        5: {
                            "title": "adaptation",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        6: {
                            "title": "créatif",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },

                    }
                    for(let cont of Object.keys(dataComp)){
                        for(let index in dataComp[cont].content){
                            dataComp[cont].content[index] = "- " + dataComp[cont].content[index];
                        }
                    }
                    this.createChild(dataComp);
                    break;
                case "formation":
                    const dataForm = {
                        1: {
                            "title": "Développeur Web / Web mobile",
                            "content": ["HTML", "Javascript / Typescript", "Css / Sass","Maquettage", "PHP", "SQL", "Git / Github", "Hébergement"]
                        },
                        2: {
                            "title": "Concepteur Développeur d'Application",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                    }
                    for(let cont of Object.keys(dataForm)){
                        for(let index in dataForm[cont].content){
                            dataForm[cont].content[index] = "- " + dataForm[cont].content[index];
                        }
                    }
                    this.createChild(dataForm)
            }


        }
    }

    createChild(data){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.className = "competence-list";
        newExposure.pushListeningEle(this.div, () => {
            if(!this.display){
                this.display = true;
                let index = 0;
                for(let i of Object.keys(data)){
                    this.child.push(new Competence(this.div,index,data[i]));
                    index ++;
                }

            }
        },false);

    }

    __init__(){
        this.getData(true);
    }
}

export {CompetenceListe}
