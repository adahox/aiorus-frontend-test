import { Scene } from '../../lib/Clamp/Core/Decorators/Scene';
import ambientAudio from './../../../sounds/music.mp3';
import TemplateScene from "./App.html";
import style from './App.scss';

@Scene({
    selector: 'app-game',
    templateUrl: TemplateScene,
    style: style
})
export default class App extends HTMLElement {

    constructor() {
        super()
    }
}