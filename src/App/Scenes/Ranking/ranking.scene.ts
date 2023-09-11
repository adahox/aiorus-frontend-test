import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import NextButton from "./Objets/claw-button/next-button.object";
import RankingSceneTemplate from  "./ranking.scene.html"
import style from "./ranking.scene.sass"


@Scene({
    selector: 'ranking-scene',
    templateUrl: RankingSceneTemplate,
    style: style,
    import: [
        NextButton
    ]
})
export class RankingScene extends HTMLElement {

    constructor() {
        super();
    }

    onSceneLoad(): void {}
}