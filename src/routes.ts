import { FinishScene } from './App/Scenes/Finish/finish.scene';
import { GameScene } from './App/Scenes/Game/game.scene';
import { LoadingScene } from './App/Scenes/Loading/loading.scene';
import { RankingScene } from './App/Scenes/Ranking/ranking.scene';

export const routes = [
    { route: '#/', scene: LoadingScene },
    { route: '#/game', scene: GameScene },
    { route: '#/ranking', scene: RankingScene },
    { route: '#/finish', scene: FinishScene },
];


