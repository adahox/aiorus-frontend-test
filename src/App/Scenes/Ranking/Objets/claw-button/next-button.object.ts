import { Obj } from "../../../../../../lib/Clamp/Core/Decorators/Object";
import nextButtonObject from "./next-button.object.html";
import style from './next-button.object.sass'
import audioClickButton from '../../../../../sounds/button.wav'

@Obj({
    selector: 'next-button',
    templateUrl: nextButtonObject,
    style: style
})
export default class NextButton extends HTMLElement {

    constructor() {
        super();
    }

    onClick(): void {
        const audioElement = new Audio(audioClickButton);
        audioElement.play()
    }
}