import { Playlist } from "./Playlist";
import { Video } from "./Video";

export class Player {
  private history: string[] = [];
  private loop = false;
  private shuffle = false;
  private shuffleOrder: number[] = [];
  private shufflePointer = 0;

  constructor(private playlist: Playlist) {}

  private get currentVideo(): Video | null {
    return this.playlist.getCurrent();
  }

  play(): void {
    const v = this.currentVideo;
    if (!v) return console.log("Playlist vazia.");
    v.play();
    this.history.push(v.getId());
  }

  pause(): void {
    this.currentVideo?.pause();
  }

  stop(): void {
    this.currentVideo?.stop();
  }

  next(): void {
    if (this.shuffle) {
      if (this.shuffleOrder.length === 0) {
        console.log("Shuffle não inicializado ou playlist vazia.");
        return;
      }

      this.shufflePointer++;

      if (this.shufflePointer >= this.shuffleOrder.length) {
        if (this.loop) {
          this.generateShuffleOrder();
          this.shufflePointer = 0;
        } else {
          console.log("Fim da ordem embaralhada.");
          return;
        }
      }

      const nextIdx = this.shuffleOrder[this.shufflePointer];
      if (nextIdx === undefined) {
        console.log("Erro: índice inválido no shuffleOrder.");
        return;
      }

      this.playlist.setIndex(nextIdx);
    } else {
      this.playlist.next();

      if (this.playlist.getIndex() === 0 && !this.loop) {
        console.log("Chegou ao fim da playlist.");
        return;
      }
    }

    this.play();
  }

  previous(): void {
    if (this.shuffle) {
      if (this.shufflePointer > 0) {
        this.shufflePointer--;
        const prevIdx = this.shuffleOrder[this.shufflePointer];
        if (prevIdx !== undefined) {
          this.playlist.setIndex(prevIdx);
          this.play();
        }
      } else if (this.loop && this.shuffleOrder.length > 0) {
        this.shufflePointer = this.shuffleOrder.length - 1;
        const prevIdx = this.shuffleOrder[this.shufflePointer];
        if (prevIdx !== undefined) {
          this.playlist.setIndex(prevIdx);
          this.play();
        }
      } else {
        console.log("Início da ordem embaralhada.");
      }
    } else {
      this.playlist.previous();
      this.play();
    }
  }

  setLoop(on: boolean): void {
    this.loop = on;
    console.log(`Loop ${on ? "ON" : "OFF"}`);
  }

  setShuffle(on: boolean): void {
    this.shuffle = on;
    console.log(`Shuffle ${on ? "ON" : "OFF"}`);

    if (on) {
      this.generateShuffleOrder();
    }
  }

  private generateShuffleOrder(): void {
    const n = this.playlist.getLength();
    if (n === 0) return;

    this.shuffleOrder = Array.from({ length: n }, (_, i) => i);

    // Fisher-Yates shuffle
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffleOrder[i]!, this.shuffleOrder[j]!] = [this.shuffleOrder[j]!, this.shuffleOrder[i]!];

    }

    this.shufflePointer = 0;
    const firstIdx = this.shuffleOrder[this.shufflePointer];
    if (firstIdx !== undefined) {
      this.playlist.setIndex(firstIdx);
    }
    console.log("Nova ordem embaralhada:", this.shuffleOrder);
  }

  getHistory(): string[] {
    return [...this.history];
  }
}
