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
var RoomList = (function (_super) {
    __extends(RoomList, _super);
    function RoomList() {
        return _super.call(this) || this;
    }
    RoomList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var list = new eui.List();
        this.roomList.dataProvider = new eui.ArrayCollection(["房间1", "房间2", "房间3"]);
        this.roomList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectElement, this);
        this.roomList = list;
    };
    RoomList.prototype.selectElement = function (e) {
        console.log("你选择了" + this.roomList.selectedItem + "," + this.roomList.selectedIndex);
    };
    return RoomList;
}(eui.Scroller));
__reflect(RoomList.prototype, "RoomList", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RoomListScroller.js.map