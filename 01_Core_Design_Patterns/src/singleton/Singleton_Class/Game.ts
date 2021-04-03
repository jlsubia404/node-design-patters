import {Player} from "./Player";
import Scores from "./ScoreBoard";

export class Game {
    join(player: Player) {
        Scores.join(player.getName());
    }

    scores() {
        return Scores.getBoard();
    }

    getWinner() {
        return Scores.sort()[0];
    }
}