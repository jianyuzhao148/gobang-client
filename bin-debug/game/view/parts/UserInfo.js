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
var UserInfo = (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super.call(this) || this;
    }
    UserInfo.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { SecneManager.instance.changeScene(new RoomScene()); }, this);
        this.fastGame.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { SecneManager.instance.changeScene(new RoomScene()); }, this);
    };
    return UserInfo;
}(eui.ItemRenderer));
__reflect(UserInfo.prototype, "UserInfo");
//# sourceMappingURL=UserInfo.js.map