"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Board");
const main = () => {
    const board = new Board_1.default();
    board.setup();
    console.log('[');
    for (const row of board.spaces) {
        console.log('[');
        for (let i = 0; i < 8; i++) {
            console.log(row[i].piece);
            if (i === 7) {
                console.log(']');
            }
        }
    }
    console.log(']');
};
main();
//# sourceMappingURL=index.js.map