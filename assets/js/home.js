import "../css/home.css"
import {TextAnim} from "./classes/TextAnim";
import {Nav} from "./classes/Nav";

new TextAnim("#first","Yann Tyburczy",100)
new TextAnim("#second","Développeur Web / Web mobile$Freelance",200,"$");

new Nav(document.querySelector("#nav"),40);
