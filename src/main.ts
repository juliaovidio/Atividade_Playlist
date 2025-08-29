import { Playlist } from "./Playlist";
import { Player } from "./Player";
import { Video } from "./Video";
import { AdVideo } from "./AdVideo";
import { LiveStream } from "./LiveStream";

// Criar vídeos
const v1 = new AdVideo("ad1", "Propaganda X", 30, "AdCorp", "Empresa X");
const v2 = new Video("v1", "Aula de TypeScript", 600, "Julia");
const v3 = new LiveStream("live1", "Evento ao Vivo", "Canal Y", 300);
const v4 = new Video("v2", "Resumo da Aula", 200, "Julia");

// Criar playlist
const playlist = new Playlist();
playlist.add(v1);
playlist.add(v2);
playlist.add(v3);
playlist.add(v4);

// Criar player
const player = new Player(playlist);

// Simulação
console.log("--- Simulação ---");
player.play();       // toca anúncio
player.next();       // toca aula
player.next();       // toca live
player.setShuffle(true);
player.setLoop(true);
player.next();       // toca em ordem embaralhada
player.next();
player.previous();
console.log("Histórico:", player.getHistory());
