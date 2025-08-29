import { Playable } from "./Playable";
import { Describable } from "./Describable";

export class Video implements Playable, Describable {
  private currentTime: number = 0;

  constructor(
    private id: string,
    private title: string,
    private duration: number,
    private author: string
  ) {}

  play(): void { this.currentTime = 0; console.log(`▶️ Tocando: ${this.title}`); }
  pause(): void { console.log(`⏸️ Pausado: ${this.title}`); }
  stop(): void { this.currentTime = 0; console.log(`⏹️ Parado: ${this.title}`); }

  info(): string {
    return `Video: ${this.title} (${this.duration}s) - ${this.author}`;
  }

  getId() { return this.id; }
  getTitle() { return this.title; }
}
