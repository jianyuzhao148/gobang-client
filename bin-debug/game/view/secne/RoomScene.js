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
 * 房间场景
 */
var RoomScene = (function (_super) {
    __extends(RoomScene, _super);
    function RoomScene() {
        return _super.call(this) || this;
    }
    RoomScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    RoomScene.prototype.onComplete = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(2, 0x000000);
        shp.graphics.moveTo(40, 40);
        var k = 40;
        for (var i = 0; i < 15; i++) {
            shp.graphics.lineTo(840, k);
            k = k + 57;
            shp.graphics.moveTo(40, k);
        }
        k = 40;
        shp.graphics.moveTo(40, 40);
        for (var i = 0; i < 15; i++) {
            shp.graphics.lineTo(k, 840);
            k = k + 57;
            shp.graphics.moveTo(k, 40);
        }
        shp.graphics.endFill();
        this.checkerboardGroup.addChild(shp);
    };
    return RoomScene;
}(Scene));
__reflect(RoomScene.prototype, "RoomScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RoomScene.js.map