"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Space_1 = require("./Space");
const Piece_1 = require("./Piece");
class Board {
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
                this.spaces[i].push(new Space_1.default(color));
                color = Board.colorSwitch(color);
            }
        }
    }
    get spaces() {
        return this._spaces;
    }
    set spaces(value) {
        this._spaces = value;
    }
    static colorSwitch(colorPointer) {
        if (colorPointer === "black") {
            return "white";
        }
        else {
            return "black";
        }
    }
    setup() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i < 3) {
                    if (this.spaces[i][j].playable) {
                        this.spaces[i][j].piece = new Piece_1.default("white");
                    }
                }
                else if (i >= 5) {
                    if (this.spaces[i][j].playable) {
                        this.spaces[i][j].piece = new Piece_1.default("black");
                    }
                }
            }
        }
    }
}
exports.default = Board;
//# sourceMappingURL=Board.js.map