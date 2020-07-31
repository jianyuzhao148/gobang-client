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
 * 房间列表
 */
var RoomListScroller = (function (_super) {
    __extends(RoomListScroller, _super);
    function RoomListScroller() {
        return _super.call(this) || this;
    }
    RoomListScroller.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomListScroller.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.roomList.dataProvider = new eui.ArrayCollection([{ image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }, { image: "resource/assets/egret_icon.png", image2: "resource/assets/bg.jpg" }]);
        this.roomList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectElement, this);
        this.roomList.itemRenderer = RoomListItem;
        this.viewport = this.roomList;
    };
    RoomListScroller.prototype.selectElement = function (e) {
        console.log("你选择了" + this.roomList.selectedItem + "," + this.roomList.selectedIndex);
    };
    return RoomListScroller;
}(eui.Scroller));
__reflect(RoomListScroller.prototype, "RoomListScroller", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RoomListScroller.js.map