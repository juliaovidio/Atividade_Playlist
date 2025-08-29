"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
class Video {
    constructor(id, title, duration, author) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.author = author;
        this.currentTime = 0;
    }
    play() { this.currentTime = 0; console.log(`▶️ Tocando: ${this.title}`); }
    pause() { console.log(`⏸️ Pausado: ${this.title}`); }
    stop() { this.currentTime = 0; console.log(`⏹️ Parado: ${this.title}`); }
    info() {
        return `Video: ${this.title} (${this.duration}s) - ${this.author}`;
    }
    getId() { return this.id; }
    getTitle() { return this.title; }
}
exports.Video = Video;
//# sourceMappingURL=Video.js.map