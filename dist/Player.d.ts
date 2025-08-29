import { Playlist } from "./Playlist";
export declare class Player {
    private playlist;
    private history;
    private loop;
    private shuffle;
    private shuffleOrder;
    private shufflePointer;
    constructor(playlist: Playlist);
    private get currentVideo();
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    previous(): void;
    setLoop(on: boolean): void;
    setShuffle(on: boolean): void;
    private generateShuffleOrder;
    getHistory(): string[];
}
//# sourceMappingURL=Player.d.ts.map