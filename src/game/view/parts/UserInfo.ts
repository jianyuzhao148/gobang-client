class UserInfo extends eui.ItemRenderer{
    private createRoom:eui.Button;
    private fastGame:eui.Button;

    public constructor(){
        super()
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{SecneManager.instance.changeScene(new RoomScene())},this);
        this.fastGame.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{SecneManager.instance.changeScene(new RoomScene())},this);
    }
}