/**
 * 场景管理
 */
class SecneManager {
    private static _manager: SecneManager;

    //注意设置根场景
    public rootLayer: eui.UILayer;//根场景 
    private currentScene: Scene;//当前场景
    private pop_Scene: Scene;//弹出场景

    constructor() {
    }

    public static get instance() {
        if (SecneManager._manager == null) {
            this._manager = new SecneManager();
        }
        return SecneManager._manager;
    }

    /**
     * 切换场景
     * @param scene 需要显示的场景
     */
    public changeScene(scene: Scene) {
        if (this.currentScene) {
            this.rootLayer.removeChild(this.currentScene);
            this.currentScene = null;
        }
        this.rootLayer.addChild(scene);
        this.currentScene = scene;
    }

    /**
     * 关闭弹出场景
     */
    public popScene() {
        if (this.pop_Scene) {
            this.rootLayer.removeChild(this.pop_Scene);
            this.pop_Scene = null;
        }
    }

    /**
     * 添加弹出场景
     * @param scene 
     */
    public pushScene(scene: Scene) {
        this.popScene();
        if (!this.pop_Scene) {
            scene.verticalCenter = 0;
            scene.horizontalCenter = 0;
            this.rootLayer.addChild(scene);
            this.pop_Scene = scene;
        }
    }
}