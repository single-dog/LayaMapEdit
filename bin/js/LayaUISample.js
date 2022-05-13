var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = ui.test.TestPageUI;
var Label = laya.ui.Label;
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        //btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
        _this.btn.on(laya.events.Event.CLICK, _this, _this.onBtnClick);
        _this.radioGroup2.selectHandler = Handler.create(_this, _this.radioGroupSelect2);
        Laya.timer.frameLoop(1, _this, _this.onFrame);
        return _this;
    }
    TestUI.prototype.onFrame = function () {
        this.txtMousePos.changeText("\u5F53\u524D\u9F20\u6807\u7684\u5730\u56FE\u5750\u6807x:".concat(Math.floor(this.editView.box.mouseX / Number(this.inputCellWidth.text)), "  y:").concat(Math.floor(this.editView.box.mouseY / Number(this.inputCellHeight.text))));
        this.txtMousePos2.changeText("\u5F53\u524D\u9F20\u6807\u7684\u5730\u56FE\u5750\u6807x:".concat(this.editView.mouseX, "  y:").concat(-this.editView.mouseY));
    };
    TestUI.prototype.radioGroupSelect = function () {
    };
    TestUI.prototype.radioGroupSelect2 = function () {
    };
    TestUI.prototype.onBtnClick = function () {
        //手动控制组件属性
        this.radioGroup2.selectedIndex = 1;
        const filePath = window.electronAPI.openFile();
        filePathElement.innerText = filePath;
    };
    TestUI.prototype.onListRender = function (item, index) {
        //自定义list的渲染方式
        var label = item.getChildByName("label");
        if (index % 2) {
            label.color = "#ff0000";
        }
        else {
            label.color = "#000000";
        }
    };
    return TestUI;
}(ui.test.TestPageUI));
// 程序入口
Laya.init(1280, 760);
Laya.loader.load([{ url: "res/atlas/comp.json", type: Loader.ATLAS }], Handler.create(this, this.onLoaded));
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map