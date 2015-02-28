var GameLayer = cc.LayerColor.extend({
	init:function(){
		this.maze = new Maze();
		this.maze.setPosition(cc.p(0,40));
		this.addChild(this.maze);
		this.pacman=new Pacman(10*4+20,60*4+20);
		this.maze.addChild(this.pacman);
		this.pacman.scheduleUpdate();
		this.addKeyboardHandlers();
	},
	addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
	onKeyDown:function(keyCode,event){
		switch(keyCode){
			case cc.KEY.left:
				this.pacman.setNextDirection(Pacman.DIR.LEFT);
				break;
			case cc.KEY.right:
				this.pacman.setNextDirection(Pacman.DIR.RIGHT);
				break;
			case cc.KEY.up:
				this.pacman.setNextDirection(Pacman.DIR.UP);
				break;
			case cc.KEY.down:
				this.pacman.setNextDirection(Pacman.DIR.DOWN);
				break;
		}
	},
	onKeyUp:function(keyCode,event){
		this.pacman.setNextDirection(Pacman.DIR.STILL);
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
