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
/**
* name
*/
var editor;
(function (editor) {
    var EditView = /** @class */ (function (_super) {
        __extends(EditView, _super);
        function EditView() {
            return _super.call(this) || this;
        }
        EditView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.img.skin = "res/map/1001.png";
        };
        return EditView;
    }(ui.test.EditViewUI));
    editor.EditView = EditView;
})(editor || (editor = {}));
//# sourceMappingURL=EditView.js.map