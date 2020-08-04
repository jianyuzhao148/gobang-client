class NewsItem extends eui.ItemRenderer {
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)
    }

    private onComplete() {
        
    }
}