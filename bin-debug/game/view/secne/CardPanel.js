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
var CardPanel = (function (_super) {
    __extends(CardPanel, _super);
    function CardPanel() {
        return _super.call(this) || this;
    }
    CardPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CardPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CardPanel.prototype.onComplete = function () {
        this.closeCard.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SecneManager.instance.popScene();
        }, this);
    };
    return CardPanel;
}(Scene));
__reflect(CardPanel.prototype, "CardPanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CardPanel.js.map