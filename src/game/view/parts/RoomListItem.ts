/**
 * 房间列表选项
 */
class RoomListItem extends eui.ItemRenderer {
    private playerGroup1: eui.Group;
    private playerImage1: eui.Image;
    private playerGroup2: eui.Group;
    private playerImage2: eui.Image;

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
    
        var circle2: egret.Shape = new egret.Shape();
        circle2.graphics.beginFill(0x0000ff);
        circle2.graphics.drawCircle(40, 40, 40);
        circle2.graphics.endFill();
        this.playerGroup2.addChild(circle2);
        this.playerImage2.mask=circle2;
    }
}