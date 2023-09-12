import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import Header from "../../header/header.object";
import ambientAudio from './../../../sounds/music.mp3';
import GameSceneTemplate from "./game.scene.html";
import style from './game.scene.sass'
import clawButton from './Objects/claw-button/claw-button.object';
import DownArrow from "./Objects/down-arrow/down-arrow.object";
import LeftArrow from "./Objects/left-arrow/left-arrow.object";
import RightArrow from "./Objects/right-arrow/right-arrow.object";
import UpArrow from "./Objects/up-arrow/up-arrow.object";

@Scene({
    selector: 'game-scene',
    templateUrl: GameSceneTemplate,
    style: style,
    import: [
        clawButton,
        DownArrow,
        LeftArrow,
        RightArrow,
        UpArrow,
        Header
    ]
})
export class GameScene extends HTMLElement {

    constructor() {
        super();
    }

    onSceneLoad(): void {
        // const audio = new Audio(ambientAudio);
        // audio.volume = 0.2;
        // audio.loop = true;
        // audio.muted = true;
        // audio.play();
    }
}