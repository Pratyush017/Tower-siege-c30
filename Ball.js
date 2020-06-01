class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    //this.image = loadImage("ball.png");
  }

  display() {
    /*push();
    imageMode(CENTER);
    image( this.image,0, 0, 50,50);
    pop();*/
    super.display();

  }
}
