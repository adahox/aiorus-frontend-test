import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import LoadingSceneTemplate from "./loading.scene.html";
import style from './loading.scene.sass'

@Scene({
    selector: 'loading-scene',
    templateUrl: LoadingSceneTemplate,
    style: style
})
export class LoadingScene extends HTMLElement {
    constructor() {
        super()
    }
}