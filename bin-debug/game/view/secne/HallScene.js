var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 大厅场景
 */
var HallScene = (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        var _this = _super.call(this) || this;
        _this.socket = Socket.instance;
        return _this;
    }
    HallScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HallScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    HallScene.prototype.onComplete = function () {
        this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 })); //登录模拟
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create, this);
        this.fastGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fast, this);
    };
    HallScene.prototype.create = function () {
        SecneManager.instance.changeScene(new RoomScene());
    };
    HallScene.prototype.fast = function () {
        console.log("快速开始");
    };
    HallScene.prototype.turnPage = function () {
        console.log("test");
    };
    return HallScene;
}(Scene));
__reflect(HallScene.prototype, "HallScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HallScene.js.map