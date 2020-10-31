class Paper{

    constructor(x,y,radius){
 
     var options={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
     
     this.x=x
     this.y=y
     this.radius=70  
 this.body=Bodies.circle(x,y,70,options);
 World.add(world, this.body)
 this.image=loadImage("paper(1).png");
 
 
 
 
    }
 
 display(){
 push()
 translate (this.body.position.x,this.body.position.y)
 rotate(this.body.angle)
 image(this.image,0,0,this.radius/2,this.radius/2)
 pop()
 
 
 
 }
 
 
 
 
 }