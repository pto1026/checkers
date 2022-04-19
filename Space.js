"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Space {
    constructor(color) {
        this._color = color;
        this._playable = color === "black";
        this._piece = null;
    }
    get piece() {
        return this._piece;
    }
    set piece(value) {
        this._piece = value;
    }
    get playable() {
        return this._playable;
    }
    set playable(value) {
        this._playable = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
}
exports.default = Space;
//# sourceMappingURL=Space.js.map