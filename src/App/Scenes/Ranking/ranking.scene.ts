import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import Header from "../../header/header.object";
import NextButton from "./Objets/claw-button/next-button.object";
import RankingSceneTemplate from  "./ranking.scene.html"
import style from "./ranking.scene.sass"


@Scene({
    selector: 'ranking-scene',
    templateUrl: RankingSceneTemplate,
    style: style,
    import: [
        NextButton,
        Header
    ]
})
export class RankingScene extends HTMLElement {

    constructor() {
        super();
    }

    onSceneLoad(): void {}
}