import { Obj } from "../../../../../../lib/Clamp/Core/Decorators/Object";
import downArrowObject from "./down-arrow.object.html";
import style from './down-arrow.object.sass'
import audioClickButton from '../../../../../sounds/button.wav'

@Obj({
    selector: 'down-arrow',
    templateUrl: downArrowObject,
    style: style
})
export default class DownArrow extends HTMLElement {

    constructor() {
        super();
    }

    onClick(): void {
        const audioElement = new Audio(audioClickButton);
        audioElement.play()
    }
}