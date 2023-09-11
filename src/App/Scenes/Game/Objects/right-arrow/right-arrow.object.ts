import { Obj } from "../../../../../../lib/Clamp/Core/Decorators/Object";
import rigtArrowObject from "./right-arrow.object.html";
import style from './right-arrow.object.sass'
import audioClickButton from '../../../../../sounds/button.wav'

@Obj({
    selector: 'right-arrow',
    templateUrl: rigtArrowObject,
    style: style
})
export default class RightArrow extends HTMLElement {

    constructor() {
        super();
    }

    onClick(): void {
        const audioElement = new Audio(audioClickButton);
        audioElement.play()
    }
}