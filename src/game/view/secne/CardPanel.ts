class CardPanel extends Scene implements eui.UIComponent {

    private closeCard:eui.Button;

    constructor(){
        super()
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    protected onComplete() {
        this.closeCard.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            SecneManager.instance.popScene()
        },this)
    }

}