// ======================================================
// JOGO DA MEMÓRIA - Versão simplificada
// ======================================================

// Constante criada para ler os objectos do tabuleiro
const cards = document.querySelectorAll('.memory-card');

// Variáveis que controlam o estado do jogo
let primeiraCarta = null;   // guarda a 1ª carta clicada
let segundaCarta = null;    // guarda a 2ª carta clicada
let podeClicar = true;      // impede novos cliques enquanto o jogo "pensa"
let paresEncontrados = 0;   // conta quantos pares já foram descobertos

const totalDePares = cards.length / 2; // total de pares que existem no tabuleiro

let segundosPassados = 0;  // quantos segundos já se passaram na partida atual
let temporizador = null;   // guarda o setInterval, para podermos pará-lo depois
