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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userData, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 }))];
                    case 1:
                        userData = _b.apply(_a, [_c.sent()]);
                        this.userInfoList.dataProvider = new eui.ArrayCollection([{}]);
                        this.userInfoList.itemRenderer = UserInfoItem;
                        /**
                         * News Column
                         */
                        this.newsList.dataProvider = new eui.ArrayCollection([{ news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }]);
                        this.newsList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectElement, this);
                        this.newsScroller.verticalScrollBar.autoVisibility = false;
                        this.newsScroller.verticalScrollBar.visible = false;
                        /**
                         * RoomList Column
                         */
                        this.search.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        }, this);
                        this.roomList.dataProvider = new eui.ArrayCollection([
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg", title: "五子棋-标准", player1Name: "玩家1", player2Name: "玩家2", player1Title: "十段", player2Title: "八段" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
                            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" }
                        ]);
                        this.roomList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (e) {
                            console.log("你选择" + _this.roomList.selectedItem + "," + _this.roomList.selectedIndex);
                        }, this.roomList);
                        this.roomList.itemRenderer = RoomListItem;
                        this.roomScroller.verticalScrollBar.autoVisibility = false;
                        this.roomScroller.verticalScrollBar.visible = false;
                        /**
                         * Menu Column
                         */
                        this.task.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            SecneManager.instance.pushScene(new CardPanel());
                        }, this);
                        this.friend.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            SecneManager.instance.pushScene(new CardPanel());
                        }, this);
                        this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            SecneManager.instance.pushScene(new CardPanel());
                        }, this);
                        this.mail.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            SecneManager.instance.pushScene(new CardPanel());
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    HallScene.prototype.selectElement = function (e) {
        console.log("你选择了" + this.newsList.selectedItem + "," + this.newsList.selectedIndex);
    };
    return HallScene;
}(Scene));
__reflect(HallScene.prototype, "HallScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HallScene.js.map