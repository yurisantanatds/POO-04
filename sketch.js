//Simulando a segunda lei de Newton
//F =m*a
//Parte 1

let bola;

function setup() {
  createCanvas(400, 400);
bola = new Bolinha(200, 200);
}

function draw() {
  background(220);
  let gravidade = createVector(0,0.1);
bola.exibir();
  bola.aplicarForca(gravidade);
  bola.update();
  bola.colidir();
}