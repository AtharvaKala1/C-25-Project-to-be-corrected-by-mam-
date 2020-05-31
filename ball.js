class Ball{
    constructor(x, y,diameter) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
      this.body = Bodies.circle(x,y, diameter, options);
      this.diameter = diameter;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
      this.image = loadImage("sprites/paper.jpg");
} 

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    fill('purple');
    translate(pos.x,pos.y);
    ellipse(0,0, this.diameter);
    pop();
  }

}