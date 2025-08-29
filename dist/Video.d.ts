import { Playable } from "./Playable";
import { Describable } from "./Describable";
export declare class Video implements Playable, Describable {
    private id;
    private title;
    private duration;
    private author;
    private currentTime;
    constructor(id: string, title: string, duration: number, author: string);
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
    getId(): string;
    getTitle(): string;
}
//# sourceMappingURL=Video.d.ts.map