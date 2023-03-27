//SVGS for skills
import adobe from "../images/icons/adobe.svg"
import figma from "../images/icons/figma.svg"
import gatsby from "../images/icons/gatsby.svg"
import javascript from "../images/icons/javascript.svg"
import next from "../images/icons/next.svg"
import python from "../images/icons/python.svg"
import react from "../images/icons/react.svg"
import swift from "../images/icons/swift.svg"
import tailwind from "../images/icons/tailwind.svg"
import three from "../images/icons/three.svg"
import typescript from "../images/icons/typescript.svg"
import ui from "../images/icons/ui.svg"
import vue from "../images/icons/vue.svg"

//Images for projects
import illumitex from "../images/illumitex.gif"
import illumitexMobile from  "../images/illumitex-mobile.gif"
import fizzBuzz from  "../images/FizzBuzz.gif"
import gather from "../images/Gather.gif"
import notifications from "../images/Notifications.gif"

const images : Record<string, string>  = {
    adobe, figma, gatsby, javascript, 
    next, python, react, swift, tailwind, three, 
    typescript, ui, vue,

    illumitex, illumitexMobile, fizzBuzz, gather, notifications
}

export default function nameToImage(name : string) : string {

    if(name == "") return ""

    if (!images.hasOwnProperty(name)){
        throw new Error(`Called for a name that doesn't have an image: ${name}`);
    }
    return images[name]
}