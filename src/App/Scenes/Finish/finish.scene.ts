import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import GameSceneTemplate from "./finish.scene.html";
import style from './finish.scene.sass'

@Scene({
    selector: 'finish-scene',
    templateUrl: GameSceneTemplate,
    style: style,
})
export class FinishScene extends HTMLElement {

    constructor() {
        super();
    }

    onSceneLoad(): void {}
}