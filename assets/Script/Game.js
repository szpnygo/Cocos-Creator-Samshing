// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        player:cc.Node,
        ball: cc.Node,
        brickLayout: require('BrickLayout'),
        bricksNumber: cc.Integer,
        gameStart:false,
    },

    onLoad () {
        cc.director.getPhysicsManager().enabled = true; 
        this.brickLayout.init(this.bricksNumber);
        this.gameOver();

        let rigidbody = this.ball.getComponent(cc.RigidBody);
        this.node.on(cc.Node.EventType.TOUCH_START,function(){
            if(!this.gameStart){
                console.log("start");
                this.gameStart = true;
                rigidbody.linearVelocity = new cc.Vec2(0,-800);
                // rigidbody.gravityScale = 1;
            }
        });
    },

    start () {

    },

    update (dt) {

    },

    gameOver (){
        this.ball.on('game_over',function(){
            console.log("game_over");
            this.gameStart = false;
            cc.director.loadScene('Index');
        });

    },
});
