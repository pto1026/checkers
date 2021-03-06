import Board from "./Board";

const main = () => {
    const board = new Board();
    board.setup();
    console.log('[');
    for (const row of board.spaces) {
        console.log('[');
        for (let i = 0; i < 8; i++) {
            console.log(row[i].piece);
            if (i === 7) {
                console.log(']')
            }
        }
    }
    console.log(']');
}

main();
