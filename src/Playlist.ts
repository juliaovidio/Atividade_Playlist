import { Video } from "./Video";

export class Playlist {
  private videos: Video[] = [];
  private index = 0;

  add(v: Video) { this.videos.push(v); }
  getCurrent(): Video | null { return this.videos[this.index] || null; }

  next(): void {
    if (++this.index >= this.videos.length) this.index = 0;
  }

  previous(): void {
    if (--this.index < 0) this.index = this.videos.length - 1;
  }

  getLength(): number { return this.videos.length; }
  setIndex(i: number) { if (i >= 0 && i < this.videos.length) this.index = i; }
  getIndex(): number { return this.index; }
}
