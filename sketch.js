let sunX = 0;

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(135, 206, 235); // céu azul claro

  // Sol se movendo
  fill(255, 204, 0);
  ellipse(sunX, 80, 50, 50);
  sunX += 1;
  if (sunX > width) sunX = 0;

  // Campo (lado esquerdo)
  fill(34, 139, 34);
  rect(0, 200, 300, 100); // grama
  fill(139, 69, 19);
  rect(80, 140, 20, 60); // tronco da árvore
  fill(34, 139, 34);
  ellipse(90, 130, 60, 60); // copa da árvore
  fill(255, 0, 0);
  rect(150, 180, 40, 20); // trator
  fill(0);
  ellipse(155, 200, 10);
  ellipse(175, 200, 10);

  // Cidade (lado direito)
  fill(200);
  rect(320, 100, 40, 100);
  rect(370, 120, 30, 80);
  rect(410, 90, 50, 110);
  fill(255, 165, 0);
  rect(470, 180, 40, 20); // carro
  fill(0);
  ellipse(475, 200, 10);
  ellipse(495, 200, 10);

  // Mensagem de conexão
  fill(255);
  rect(180, 20, 240, 30, 10);
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Festejando a conexão Campo - Cidade!", 300, 35);
       }
