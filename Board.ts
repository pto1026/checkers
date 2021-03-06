import Space from "./Space";
import Piece from "./Piece";

class Board {
    get spaces(): any[] {
        return this._spaces;
    }
    set spaces(value: any[]) {
        this._spaces = value;
    }
    private _spaces: any[];
    constructor() {
        this._spaces = [];
        for (let i = 0; i < 8; i++) {
            this.spaces.push([]);
        }
        let color = "black";
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (j === 0) {
                    color = Board.colorSwitch(color);
                }
                this.spaces[i].push(new Space(color));
                color = Board.colorSwitch(color);
            }
        }
    }
    private static colorSwitch(colorPointer): string {
        if (colorPointer === "black") {
            return "white";
        } else {
            return "black";
        }
    }
    setup() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i < 3) {
                    if (this.spaces[i][j].playable) {
                        this.spaces[i][j].piece = new Piece("white");
                    }
                } else if (i >= 5) {
                    if (this.spaces[i][j].playable) {
                        this.spaces[i][j].piece = new Piece("black");
                    }
                }
            }
        }
    }
}

export default Board;
