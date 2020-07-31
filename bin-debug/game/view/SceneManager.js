var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理
 */
var SecneManager = (function () {
    function SecneManager() {
    }
    Object.defineProperty(SecneManager, "instance", {
        get: function () {
            if (SecneManager._manager == null) {
                this._manager = new SecneManager();
            }
            return SecneManager._manager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 切换场景
     * @param scene 需要显示的场景
     */
    SecneManager.prototype.changeScene = function (scene) {
        if (this.currentScene) {
            this.rootLayer.removeChild(this.currentScene);
            this.currentScene = null;
        }
        this.rootLayer.addChild(scene);
        this.currentScene = scene;
    };
    /**
     * 关闭弹出场景
     */
    SecneManager.prototype.popScene = function () {
        if (this.pop_Scene) {
            this.rootLayer.removeChild(this.pop_Scene);
            this.pop_Scene = null;
        }
    };
    /**
     * 添加弹出场景
     * @param scene
     */
    SecneManager.prototype.pushScene = function (scene) {
        this.popScene();
        if (!this.pop_Scene) {
            scene.verticalCenter = 0;
            scene.horizontalCenter = 0;
            this.rootLayer.addChild(scene);
            this.pop_Scene = scene;
        }
    };
    return SecneManager;
}());
__reflect(SecneManager.prototype, "SecneManager");
//# sourceMappingURL=SceneManager.js.map