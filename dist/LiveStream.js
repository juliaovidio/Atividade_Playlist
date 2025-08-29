"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStream = void 0;
const Video_1 = require("./Video");
class LiveStream extends Video_1.Video {
    constructor(id, title, author, viewers) {
        super(id, title, 0, author); // duração 0 (ao vivo)
        this.viewers = viewers;
    }
    play() {
        console.log(`🔴 AO VIVO: ${this.info()}`);
    }
    info() {
        return `LiveStream: ${this.viewers} espectadores`;
    }
}
exports.LiveStream = LiveStream;
//# sourceMappingURL=LiveStream.js.map