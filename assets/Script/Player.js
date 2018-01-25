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
        canvas:{
            default:null,
            type: cc.Node
        },
        canvasRect:null,
    },

    onLoad () {
        this.canvasRect = this.canvas.getBoundingBoxToWorld();
    },

    start () {

    },

    update (dt) {

    },

    onEnable: function(){
        this.canvas.on(cc.Node.EventType.TOUCH_MOVE,this._playerMove,this);
    },

    onDisable: function(){
        this.canvas.off(cc.Node.EventType.TOUCH_MOVE,this._playerMove,this);
    },

    _playerMove :function(event){
        let delta = event.touch.getDelta();
        let move = delta.x;
        let nodeRect = this.node.getBoundingBoxToWorld();
        let tmpRect = new cc.Rect(nodeRect.x + move, nodeRect.y, nodeRect.width, nodeRect.height);
        if(cc.rectContainsRect(this.canvasRect,tmpRect)){
            this.node.x+= move;
        }
    }
});
