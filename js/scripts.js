// ======================================================
// JOGO DA MEMÓRIA - Versão simplificada
// ======================================================

// Constante criada para ler os objectos do tabuleiro
const cartoes = document.querySelectorAll('.memory-card');

// Variáveis que controlam o estado do jogo
let primeiraCarta = null;   // guarda a 1ª carta clicada
let segundaCarta = null;    // guarda a 2ª carta clicada
let podeClicar = true;      // impede novos cliques enquanto o jogo "pensa"
let paresEncontrados = 0;   // conta quantos pares já foram descobertos

const totalDePares = cartoes.length / 2; // total de pares que existem no tabuleiro

// Elemento HTML que vai mostrar o tempo (precisa existir no HTML, ex: <span id="timer">00:00</span>)
const timerElement = document.querySelector('#timer');

// Botão que o jogador clica para começar a contar o tempo (ex: <button id="start-button">Iniciar</button>)
const botaoIniciar = document.querySelector('#start');

let segundosPassados = 0;  // quantos segundos já se passaram na partida atual
let temporizador = null;   // guarda o setInterval, para podermos pará-lo depois

