import { Obj } from "../../../../../../lib/Clamp/Core/Decorators/Object";
import downArrowObject from "./up-arrow.object.html";
import style from './up-arrow.object.sass'
import audioClickButton from '../../../../../sounds/button.wav'

@Obj({
    selector: 'up-arrow',
    templateUrl: downArrowObject,
    style: style
})
export default class UpArrow extends HTMLElement {

    constructor() {
        super();
    }

    onClick(): void {
        const audioElement = new Audio(audioClickButton);
        audioElement.play()
    }
}