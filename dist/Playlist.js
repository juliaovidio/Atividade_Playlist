"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
class Playlist {
    constructor() {
        this.videos = [];
        this.index = 0;
    }
    add(v) { this.videos.push(v); }
    getCurrent() { return this.videos[this.index] || null; }
    next() {
        if (++this.index >= this.videos.length)
            this.index = 0;
    }
    previous() {
        if (--this.index < 0)
            this.index = this.videos.length - 1;
    }
    getLength() { return this.videos.length; }
    setIndex(i) { if (i >= 0 && i < this.videos.length)
        this.index = i; }
    getIndex() { return this.index; }
}
exports.Playlist = Playlist;
//# sourceMappingURL=Playlist.js.map