import test = ui.test.TestPageUI;
import Label = laya.ui.Label;
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;

class TestUI extends ui.test.TestPageUI {

	constructor() {
		super();
		//btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
		this.btn.on(laya.events.Event.CLICK, this, this.onBtnClick);
		this.radioGroup2.selectHandler = Handler.create(this,this.radioGroupSelect2);
		Laya.timer.frameLoop(1,this,this.onFrame);
	}

	private onFrame(){
		this.txtMousePos.changeText(`当前鼠标的地图坐标x:${Math.floor(this.editView.box.mouseX/Number(this.inputCellWidth.text))}  y:${Math.floor(this.editView.box.mouseY/Number(this.inputCellHeight.text))}`);
		this.txtMousePos2.changeText(`当前鼠标的地图坐标x:${this.editView.mouseX}  y:${-this.editView.mouseY}`);
	}

	private radioGroupSelect(): void {

	}
	private radioGroupSelect2(): void {

	}

	private onBtnClick(): void {
		//手动控制组件属性
		this.radioGroup2.selectedIndex = 1;
	}

	private onListRender(item: laya.ui.Box, index: number): void {
		//自定义list的渲染方式
		var label: Label = item.getChildByName("label") as Label;
		if (index % 2) {
			label.color = "#ff0000";
		} else {
			label.color = "#000000";
		}
	}
}

// 程序入口
Laya.init(1280, 760);
Laya.loader.load([{ url: "res/atlas/comp.json", type: Loader.ATLAS }], Handler.create(this, this.onLoaded));

function onLoaded(): void {
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}