/**
 * 房间列表选项
 */
class RoomListItem extends eui.ItemRenderer {
    private playerGroup1: eui.Group;
    private playerImage1: eui.Image;
    private playerGroup2: eui.Group;
    private playerImage2: eui.Image

    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)
    }

    private onComplete() {
        var circle: egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawCircle(40, 40, 40);
        circle.graphics.endFill();
        this.playerGroup1.addChild(circle);
        this.playerImage1.mask=circle;
    
        this.playerGroup2.addChild(circle);
        this.playerImage2.mask=circle;
    }
}