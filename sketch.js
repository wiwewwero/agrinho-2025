function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul
  
  // Sol
  fill(255, 255, 0); 
  ellipse(700, 80, 100, 100); // Sol
  
  // Grama
  fill(34, 139, 34);
  rect(0, 300, width, 100); // Base de grama
  
  // Árvores
  drawTree(150, 250); // Árvore 1
  drawTree(600, 260); // Árvore 2
  
  // Celeiro
  drawBarn(500, 220); // Celeiro
  
  // Trator
  drawTractor(200, 250); // Trator
  
  // Detalhes da cerca
  drawFence(50, 290, 150, 10);
  drawFence(50, 270, 150, 10);
  drawFence(50, 250, 150, 10);
}

// Função para desenhar árvores
function drawTree(x, y) {
  // Tronco
  fill(139, 69, 19);
  rect(x - 10, y, 20, 50); 
  
  // Folhas
  fill(0, 128, 0);
  ellipse(x, y - 20, 60, 60); 
}

// Função para desenhar o celeiro
function drawBarn(x, y) {
  // Corpo do celeiro
  fill(255, 0, 0);
  rect(x, y, 100, 80);
  
  // Telhado
  fill(139, 69, 19);
  triangle(x, y, x + 50, y - 40, x + 100, y); 
  
  // Porta do celeiro
  fill(255);
  rect(x + 35, y + 40, 30, 40); 
  
  // Janelas
  fill(255);
  rect(x + 10, y + 10, 20, 20); 
  rect(x + 70, y + 10, 20, 20);
}

// Função para desenhar cercas
function drawFence(x, y, w, h) {
  fill(139, 69, 19);
  rect(x, y, w, h); 
}

// Função para desenhar o trator
function drawTractor(x, y) {
  // Corpo do trator
  fill(255, 204, 0); // Cor amarela
  rect(x, y, 120, 50); // Corpo do trator
  
  // Cabine do trator
  fill(0, 102, 204); // Cor azul para a cabine
  rect(x + 20, y - 30, 40, 30); 
  
  // Roda 1
  fill(0);
  ellipse(x + 30, y + 50, 40, 40); // Roda 1
  
  // Roda 2
  fill(0);
  ellipse(x + 90, y + 50, 40, 40); // Roda 2
  
  // Farol do trator
  fill(255);
  ellipse(x + 60, y - 20, 10, 10); // Farol
  
  // Detalhes da cabine (janela)
  fill(255);
  rect(x + 25, y - 25, 10, 10); // Janela da cabine
}
