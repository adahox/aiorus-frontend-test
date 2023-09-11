import { Obj } from "../../../../../../lib/Clamp/Core/Decorators/Object";
import leftArrowObject from "./left-arrow.object.html";
import style from './left-arrow.object.sass'
import audioClickButton from '../../../../../sounds/button.wav'

@Obj({
    selector: 'left-arrow',
    templateUrl: leftArrowObject,
    style: style
})
export default class LeftArrow extends HTMLElement {

    constructor() {
        super();
    }

    onClick(): void {
        const audioElement = new Audio(audioClickButton);
        audioElement.play()
    }
}