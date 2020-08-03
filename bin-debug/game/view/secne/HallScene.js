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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    };
    __decorate([
        Global.responseListen("0")
    ], HallScene.prototype, "onComplete", null);
    return HallScene;
}(Scene));
__reflect(HallScene.prototype, "HallScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HallScene.js.map