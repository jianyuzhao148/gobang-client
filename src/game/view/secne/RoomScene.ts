/**
 * 房间场景
 */
class RoomScene extends Scene implements eui.UIComponent {
    private checkerboardGroup:eui.Group;

    constructor() {
        super();
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    protected onComplete() {
        const shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(2, 0x000000);
        shp.graphics.moveTo(40, 40)
        let k=40;
        for(let i=0;i<15;i++){
            shp.graphics.lineTo(840, k);
            k=k+57;
            shp.graphics.moveTo(40, k);
        }
        k=40;
        shp.graphics.moveTo(40, 40)
        for(let i=0;i<15;i++){
            shp.graphics.lineTo(k, 840);
            k=k+57;
            shp.graphics.moveTo(k, 40);
        }

        shp.graphics.endFill();
        this.checkerboardGroup.addChild(shp);
    }

}