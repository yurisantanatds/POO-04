class Bolinha{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
  }
  exibir(){
    circle(this.pos.x, this.pos.y, 30);
  }
  aplicarForca(forca){
    this.acc=forca
  }
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  colidir(){
    if(this.pos.y >= height){
      this.pos.y = height;
      this.vel.y *= -1;
    }
  }
}
