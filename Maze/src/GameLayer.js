var GameLayer = cc.LayerColor.extend({
	init:function(){
		this.maze = new Maze();
		this.maze.setPosition(cc.p(0,40));
		this.addChild(this.maze);
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
