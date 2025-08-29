# Atividade_Playlist
# Player de Vídeo com Playlist (TypeScript + POO)

## Descrição
Projeto de um *player de vídeo* com playlists, controles, navegação, modos (loop e shuffle) e histórico, implementado em *TypeScript* aplicando os 4 pilares da *Programação Orientada a Objetos*.

O objetivo é consolidar:
- *Abstração*
- *Encapsulamento*
- *Herança*
- *Polimorfismo*

---

## Estrutura de Arquivos

src/
├─ Playable.ts # Interface para reprodução (play/pause/stop)
├─ Describable.ts # Interface para informações do vídeo (info)
├─ Video.ts # Classe base de vídeo
├─ AdVideo.ts # Subclasse de vídeo de anúncio
├─ LiveStream.ts # Subclasse de live stream
├─ Playlist.ts # Classe que gerencia uma lista de vídeos
├─ Player.ts # Classe que gerencia a reprodução, histórico, loop e shuffle
└─ main.ts # Simulação e teste do player

---

## Como Executar


1. Instalar dependências
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init

2. Configuração do TypeScript
 No tsconfig.json, utilize:
 {
   "compilerOptions": {
     "rootDir": "./src",
     "outDir": "./dist",
     "target": "es2020",
     "module": "commonjs",
     "moduleResolution": "node",
     "esModuleInterop": true,
     "strict": true,
     "skipLibCheck": true
   }
 }
Importante: Remover "type": "module" do package.json para usar CommonJS.

3. Rodar o projeto
 Rodar direto sem compilar:
 npx ts-node src/main.ts

## Complementos

1.Funcionalidades do Player:
 Play/Pause/Stop de vídeos
 Next/Previous para navegar na playlist
 Loop: repete a playlist continuamente
 Shuffle: reprodução aleatória
 Histórico: registro dos vídeos já assistidos
 Suporte a diferentes tipos de vídeo: Video, AdVideo e LiveStream

2. APLICAÇÃO DOS 4 PILARES
  1. Abstração
  Video, Playlist e Player são abstrações claras.
  Interfaces Playable e Describable definem o que cada classe deve implementar (play/pause/stop e info()).

  2. Encapsulamento
  Atributos privados (currentTime, videos, state, history) não são acessíveis diretamente.
  Getters e setters controlam acesso aos dados.
  Evita “vazar” o estado interno do player e da playlist.

 3. Herança
 AdVideo e LiveStream herdam de Video.
 Adicionam atributos específicos (ex.: advertiser, skippableAfterSeconds, viewers).

 4. Polimorfismo
 play() e info() têm comportamentos diferentes nas subclasses:
 AdVideo.play() exibe mensagem de anúncio.
 LiveStream.play() exibe “Ao vivo” e número de espectadores.
 Permite que o Player trate um array de Video de forma uniforme, chamando play() e info() sem saber o tipo exato.

3. Simulação
   Cria vídeos normais, anúncios e live streams.
   Cria uma playlist e adiciona vídeos.
   Cria o player, ativa shuffle e loop, navega e imprime informações.
   Exibe o histórico dos vídeos assistidos.

   Exemplo de saída:
     🔊 Anúncio de Empresa X (pode pular após 5s)
     ▶ Tocando: Propaganda X
     ▶ Tocando: Aula de TypeScript
    🔴 AO VIVO: LiveStream: 300 espectadores
    Nova ordem embaralhada: [3,0,2,1]
    ▶ Tocando: Resumo da Aula
    Histórico: ["ad1","v1","live1","v2"]
