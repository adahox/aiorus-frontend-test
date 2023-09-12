import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import Header from "../../header/header.object";
import GameSceneTemplate from "./finish.scene.html";
import style from './finish.scene.sass'

@Scene({
    selector: 'finish-scene',
    templateUrl: GameSceneTemplate,
    style: style,
    import: [
        Header
    ]
})
export class FinishScene extends HTMLElement {

    constructor() {
        super();
    }

    onSceneLoad(): void {}
}