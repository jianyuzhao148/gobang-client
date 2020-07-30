/**
 * 场景基类
 */
abstract class Scene extends eui.Component {
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this);
    }

    /**
     * 组件创建完成
     */
    protected abstract onComplete();
}