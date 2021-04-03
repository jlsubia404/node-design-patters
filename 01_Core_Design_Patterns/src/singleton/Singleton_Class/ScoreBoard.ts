 class ScoreBoard {

    board: any[]  = [];

    constructor(){
        this.board = [];
    }

    join(name: string) {
        this.board.push({
            name: name,
            points: 0
        });
    }

    leave(name: string) {
        this.board = this.board.filter(player => player.name !== name);

    }

    update(name: string, points: number) {
        const playerIdx = this.board.findIndex(player => player.name === name);
        if(playerIdx > -1){
            this.board[playerIdx].points += points;
        }
    }
    getBoard(){
        return this.board;
    }
    sort() {
        return this.board.sort((x,y) => y.points - x.points);
    }
}

export = new ScoreBoard();