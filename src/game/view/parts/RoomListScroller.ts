/**
 * 房间列表
 */
class RoomListScroller extends eui.Scroller implements eui.UIComponent {
    private roomList: eui.List;
    
    constructor() {
        super();
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.roomList.dataProvider = new eui.ArrayCollection([{ image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" },
            { image: "resource/assets/default.jpg", image2: "resource/assets/default.jpg" }]);
        this.roomList.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.selectElement,this);
        this.roomList.itemRenderer=RoomListItem;
        this.viewport=this.roomList;
    }

    private selectElement(e: eui.PropertyEvent): void {
        console.log("你选择了" + this.roomList.selectedItem + "," + this.roomList.selectedIndex)
    }
}