import { Video } from "./Video";
export declare class LiveStream extends Video {
    private viewers;
    constructor(id: string, title: string, author: string, viewers: number);
    play(): void;
    info(): string;
}
//# sourceMappingURL=LiveStream.d.ts.map