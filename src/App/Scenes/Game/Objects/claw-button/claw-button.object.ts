import { Obj } from "../../../../../../lib/Clamp/Core/Decorators/Object";
import clawButtonObject from "./claw-button.object.html";
import style from './claw-button.object.sass'
import audioClickButton from '../../../../../sounds/button.wav'

@Obj({
    selector: 'claw-button',
    templateUrl: clawButtonObject,
    style: style
})
export default class ClawButton extends HTMLElement {

    constructor() {
        super();
    }

    onClick(): void {
        const audioElement = new Audio(audioClickButton);
        audioElement.play()
    }
}