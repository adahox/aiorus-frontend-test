import { Scene } from "../../../../lib/Clamp/Core/Decorators/Scene";
import LoadingSceneTemplate from './loading.scene.html'
import style from './loading.scene.sass'

@Scene({
    selector: 'loading-scene',
    templateUrl: LoadingSceneTemplate,
    style: style
})
export class LoadingScene extends HTMLElement {

    constructor() {
        super();
    }

    onSceneLoad(): void {
        
        setTimeout(() => {
            console.log('executando!');
            window.location.href = '#/game';
        }, 3000);
    }
}