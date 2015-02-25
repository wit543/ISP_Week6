var GameLayer = cc.LayerColor.extend({
	init:function(){
		this.maze = new Maze();
		this.maze.setPosition(cc.p(0,40));
		this.addChild(this.maze);
		this.pacman=new Pacman(10*4+20,60*4+20);
		this.maze.addChild(this.pacman);
	}
});
var StartScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new GameLayer();
		layer.init();
		this.addChild(layer);
	}
});
