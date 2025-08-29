import { Video } from "./Video";

export class LiveStream extends Video {
  constructor(id: string, title: string, author: string, private viewers: number) {
    super(id, title, 0, author); // duração 0 (ao vivo)
  }

  play(): void {
    console.log(`🔴 AO VIVO: ${this.info()}`);
  }

  info(): string {
    return `LiveStream: ${this.viewers} espectadores`;
  }
}
