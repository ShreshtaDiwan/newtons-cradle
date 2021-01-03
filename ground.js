class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var GroundPos=this.body.position;		

			push()
			translate(GroundPos.x, GroundPos.y);
			rectMode(CENTER)
			strokeWeight(0);
			fill("lightgrey")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}