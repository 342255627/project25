class DustBin{

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:-0.2,
            density:1
        }

        this.x=x
        this.y=y
        this.bottomBody=Bodies.rectangle(600,680,200,10,options);  
    
    this.leftBody=Bodies.rectangle(500,670,10,100,options);
    this.rightBody=Bodies.rectangle(700,670,10,100,options);
    
    this.image=loadImage("dustbingreen(1).png");
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
    World.add(world,this.bottomBody);

    }
    display(){
push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
image(this.image,0,0 ,150,150);
pop();








    }
}