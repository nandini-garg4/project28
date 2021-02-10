class Boy{
    constructor(x,y,width,height)  {
     var options={
        'friction':1,
        'density':1.5,
        'isStatic':true
     
    }
    this.image=loadImage("boy.png")   
    this.width = width
    this.height = height
    
    this.body = Bodies.rectangle(x,y,width,height,options)
   
      
     World.add(world,this.body)
      
     }
   display()  {
    var pos=this.body.position;		
    push()
    translate(pos.x,pos.y);
    fill(255,0,255)
    imageMode (CENTER)
    image (this.image,0,0,this.width,this.height)
     pop()
    
    
      
          }
}