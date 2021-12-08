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
        const dataContact = {
            1: {
                "title": "Envoyer un mail",
                "content": [
                    `
                    <form method="post" id="contact">
                        <div>
                            <input type="email" placeholder="Mail" required>
                            <input type="text" placeholder="Sujet" required>
                            <input type="text" placeholder="Contenue" required>
                        </div>
                    </form>
                    `
                ],
                "strict": true
            },
            2: {
                "title": "Téléphone",
                "content": ["+33616331402","Lundi au Vendredi : 9h/17h"],
            }
        };
        if(!dev){
            if(this.api === "contact"){
                this.createChild(dataContact);
            }
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
                            "content": ["Competence / Competence 1","Competence 2","Competence 3","Competence / Competence 4", "Competence 5"]
                        },
                    }
                    for(let indexData of Object.keys(dataForm)){
                        for(let index in dataForm[indexData].content){
                            dataForm[indexData].content[index] = "- " + dataForm[indexData].content[index];
                        }
                    }
                    this.createChild(dataForm)
                    break;
                case "contact":
                    this.createChild(dataContact);
                    break;
            }
        }
    }

    createChild(data){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.className = "competence-list";
        newExposure.pushListeningEle(this.div, () => {
            console.log(this.div);
            if(!this.display && document.querySelector("#nav").dataset.display === "true"){
                this.display = true;
                let index = 0;
                for(let i of Object.keys(data)){
                    if(data[i].strict === true){
                        this.child.push(new Competence(this.div,index,data[i], true));
                    }
                    else{
                        this.child.push(new Competence(this.div,index,data[i], false));
                    }

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
