// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var Game = require('Game');

cc.Class({
    extends: cc.Component,

    properties: {
        game:{
            default: null,
            type: cc.Node,
        },
        gameComp:null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {
        this.gameComp = this.game.getComponent(Game);
    },

    update (dt) {
        let rect = this.node.getBoundingBoxToWorld();
        if(rect.y < 0){
            this.gameComp.gameOver();
            this.node.destroy();
        }
    },

});
