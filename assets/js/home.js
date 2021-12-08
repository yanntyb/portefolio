import "../css/home.scss";
import {TextAnimManager} from "./classes/TextAnimManager";
import {TextAnim} from "./classes/TextAnim";
import SweetScroll from 'sweet-scroll';
import {Nav} from "./classes/Nav";
import {CompetenceListe} from "./classes/CompetenceListe";

const nav = document.querySelector("#nav");

/**
 * Scroll smooth
 */
document.addEventListener('DOMContentLoaded', () => {new SweetScroll({})}, false);

/**
 * Block scroll before first title is displayed
 */
window.onscroll = function () { window.scrollTo(0, 0); };
/**
 * Enable scroll
 */
const enableScroll = () => {
    window.onscroll = function (){};
    nav.style.display = "flex";
    nav.style.animationName = "display";
    nav.style.animationDuration = "1s";
    nav.style.animationFillMode= "forwards";
    window.setTimeout(() => {
        nav.style.opacity = "1";
    })
}

new TextAnim(document.querySelector("#first"),["Yann Tyburczy"],200,false);

new TextAnimManager(document.querySelector("#second"),
    {
        1:{
            title: ["Développeur Web / Web mobile"],
            speed: 100,
            callback: () => {
                enableScroll();
            }
        },
        2:{
            title: ["Concepteur Développeur d'Application"],
            speed: 100,
            callback: () => {}
        }
    }
)

new CompetenceListe(document.querySelector("#pres-2"),"competence");
new CompetenceListe(document.querySelector("#pres-3"),"formation");
new Nav(nav,70);
