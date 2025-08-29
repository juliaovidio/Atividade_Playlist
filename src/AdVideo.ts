import { Video } from "./Video";

export class AdVideo extends Video {
  constructor(
    id: string,
    title: string,
    duration: number,
    author: string,
    private advertiser: string,
    private skippableAfterSeconds: number = 5
  ) {
    super(id, title, duration, author);
  }

  play(): void {
    console.log(`🔊 Anúncio de ${this.advertiser} (pode pular após ${this.skippableAfterSeconds}s)`);
    super.play();
  }

  info(): string {
    return `AdVideo: ${this.advertiser} - ${super.info()}`;
  }
}
