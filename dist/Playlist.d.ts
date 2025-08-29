import { Video } from "./Video";
export declare class Playlist {
    private videos;
    private index;
    add(v: Video): void;
    getCurrent(): Video | null;
    next(): void;
    previous(): void;
    getLength(): number;
    setIndex(i: number): void;
    getIndex(): number;
}
//# sourceMappingURL=Playlist.d.ts.map