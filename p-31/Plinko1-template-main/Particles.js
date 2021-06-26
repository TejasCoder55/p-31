class Particles{
   constructor(x,y,r){
    var  options = {
     restitution: 1,
     isStatic:true,
     friction:0.0,

    }
 this.body=Bodies.circle(x,y,this.r,options);
 this.r=6
 this.color-color(random(0,255),random(0,255),random(0,255))
 World.add(world,this.body);
   }
display(){

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);

}

}