class Piece {
    get playerColor(): string {
        return this._playerColor;
    }

    set playerColor(value: string) {
        this._playerColor = value;
    }
    private _playerColor: string;
    constructor(color: string) {
        this._playerColor = color;
    }
}
export default Piece;
