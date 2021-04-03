import { Player } from './Player';
import { Game } from './Game';

const Neythan =  new Player('Neythan');
const Victoria =  new Player('Victoria');

const Poker = new Game();

Poker.join(Neythan);
Poker.join(Victoria);

Neythan.wins(20);


Victoria.wins(30);
Victoria.wins(40);
Victoria.wins(40);

Neythan.wins(1000);
Neythan.loses(1000);

console.log('ScoreBoard: ', Poker.scores());
console.log(`Winner: ${Poker.getWinner().name} with ${Poker.getWinner().points} points`);