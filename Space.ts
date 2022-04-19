import Piece from "./Piece";

class Space {
    get piece(): Piece | null {
        return this._piece;
    }

    set piece(value: Piece | null) {
        this._piece = value;
    }
    private _piece: Piece | null;
    get playable(): boolean {
        return this._playable;
    }

    set playable(value: boolean) {
        this._playable = value;
    }
    private _playable: boolean;
    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    private _color: string;
    constructor(color: string) {
        this._color = color;
        this._playable = color === "black";
        this._piece = null;
    }
}

export default Space;
