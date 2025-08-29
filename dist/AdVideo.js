"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdVideo = void 0;
const Video_1 = require("./Video");
class AdVideo extends Video_1.Video {
    constructor(id, title, duration, author, advertiser, skippableAfterSeconds = 5) {
        super(id, title, duration, author);
        this.advertiser = advertiser;
        this.skippableAfterSeconds = skippableAfterSeconds;
    }
    play() {
        console.log(`🔊 Anúncio de ${this.advertiser} (pode pular após ${this.skippableAfterSeconds}s)`);
        super.play();
    }
    info() {
        return `AdVideo: ${this.advertiser} - ${super.info()}`;
    }
}
exports.AdVideo = AdVideo;
//# sourceMappingURL=AdVideo.js.map