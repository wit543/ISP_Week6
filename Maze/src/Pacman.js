var Pacman = cc.Sprite.extend({
	ctor:function(x,y){
		this._super();
		this.initWithFile('res/images/pacman.jpg');

		this.x = x;
		this.y = y;
		this.updatePosition();
		this.nextDirection = Pacman.DIR.STILL;
		this.direction = Pacman.DIR.STILL;
	},
	updatePosition:function(){
		this.setPosition(cc.p(this.x,this.y));
	},
	update:function(dt){
			if(this.isAtCenter()){
				this.direction=this.nextDirection;
			}
		switch(this.direction){
			case Pacman.DIR.UP:
			this.y+=Pacman.MOVE_STEP;
			break;
			case Pacman.DIR.DOWN:
			this.y-=Pacman.MOVE_STEP;
			break;
			case Pacman.DIR.LEFT:
			this.x-=Pacman.MOVE_STEP;
			break;
			case Pacman.DIR.RIGHT:
			this.x+=Pacman.MOVE_STEP;
			break;
		}
		this.updatePosition();
	},
	isAtCenter:function(){
		return (((this.x-20)%40==0)&&((this.y-20)%40==0));
	},
	setNextDirection:function(dir){
		console.log(this.x+" "+this.y);
		this.nextDirection=dir;
	}
});

Pacman.MOVE_STEP=5;
Pacman.DIR={
	LEFT:1,
	RIGHT:2,
	UP:3,
	DOWN:4,
	STILL:0
};