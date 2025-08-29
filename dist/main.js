"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Playlist_1 = require("./Playlist");
const Player_1 = require("./Player");
const Video_1 = require("./Video");
const AdVideo_1 = require("./AdVideo");
const LiveStream_1 = require("./LiveStream");
// Criar vídeos
const v1 = new AdVideo_1.AdVideo("ad1", "Propaganda X", 30, "AdCorp", "Empresa X");
const v2 = new Video_1.Video("v1", "Aula de TypeScript", 600, "Julia");
const v3 = new LiveStream_1.LiveStream("live1", "Evento ao Vivo", "Canal Y", 300);
const v4 = new Video_1.Video("v2", "Resumo da Aula", 200, "Julia");
// Criar playlist
const playlist = new Playlist_1.Playlist();
playlist.add(v1);
playlist.add(v2);
playlist.add(v3);
playlist.add(v4);
// Criar player
const player = new Player_1.Player(playlist);
// Simulação
console.log("--- Simulação ---");
player.play(); // toca anúncio
player.next(); // toca aula
player.next(); // toca live
player.setShuffle(true);
player.setLoop(true);
player.next(); // toca em ordem embaralhada
player.next();
player.previous();
console.log("Histórico:", player.getHistory());
//# sourceMappingURL=main.js.map