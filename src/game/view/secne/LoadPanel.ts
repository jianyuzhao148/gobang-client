/**
 * 载入
 */
class LoadPanel extends Scene implements eui.UIComponent {
    private load:egret.tween.TweenGroup;

    constructor() {
        super();
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.load.play();
    }

    protected onComplete() {
    }
}