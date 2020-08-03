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
 * 房间列表选项
 */
var RoomListItem = (function (_super) {
    __extends(RoomListItem, _super);
    function RoomListItem() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    RoomListItem.prototype.onComplete = function () {
        var circle = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawCircle(40, 40, 40);
        circle.graphics.endFill();
        this.playerGroup1.addChild(circle);
        this.playerImage1.mask = circle;
        var circle2 = new egret.Shape();
        circle2.graphics.beginFill(0x0000ff);
        circle2.graphics.drawCircle(40, 40, 40);
        circle2.graphics.endFill();
        this.playerGroup2.addChild(circle2);
        this.playerImage2.mask = circle2;
    };
    return RoomListItem;
}(eui.ItemRenderer));
__reflect(RoomListItem.prototype, "RoomListItem");
//# sourceMappingURL=RoomListItem.js.map