import { Video } from "./Video";
export declare class AdVideo extends Video {
    private advertiser;
    private skippableAfterSeconds;
    constructor(id: string, title: string, duration: number, author: string, advertiser: string, skippableAfterSeconds?: number);
    play(): void;
    info(): string;
}
//# sourceMappingURL=AdVideo.d.ts.map