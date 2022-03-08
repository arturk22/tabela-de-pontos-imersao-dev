var jogadores = []

function adicionar(){
  var adicionarJogador = document.getElementById("nomeJogador")
  jogadorPlacar = {}
  jogadorPlacar.nome = adicionarJogador.value
  jogadorPlacar.vitorias = 0
  jogadorPlacar.empates = 0
  jogadorPlacar.derrotas = 0
  jogadorPlacar.pontos = calculaPontos(jogadorPlacar)
  jogadores.push(jogadorPlacar)
  exibirJogadoresNaTela(jogadores)
  adicionarJogador.value = ""
}

jogadores.pontos = calculaPontos(jogadores)


function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos  
}

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  var HTML = ""
  for(i=0; i< jogadores.length; i++){
    HTML += "<tr><td>" + jogadores[i].nome + "</td>"
    HTML += "<td>" + jogadores[i].vitorias + "</td>"
    HTML += "<td>" + jogadores[i].empates + "</td>"
    HTML += "<td>" + jogadores[i].derrotas + "</td>"
    HTML += "<td>" + jogadores[i].pontos + "</td>"
    HTML += "<td><button onClick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
    HTML += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    HTML += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = HTML
}
function adicionarVitoria (i){
  var jogador = jogadores [i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
function adicionarDerrota (i){
 var jogador = jogadores [i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
function adicionarEmpate(i){
  var jogador = jogadores [i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
function removerJogador(i){
  var jogador = jogadores.splice(i,1)
  exibirJogadoresNaTela(jogadores)
}

function resetDados(){
  jogadores = []
  exibirJogadoresNaTela(jogadores)
}

function zerarPlacar(){
  for (i = 0; i < jogadores.length; i++){
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  exibirJogadoresNaTela(jogadores)
}