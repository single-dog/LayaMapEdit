
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class EditViewUI extends View {
		public panel:Laya.Panel;
		public box:Laya.Box;
		public jImg:Laya.Image;
		public img:Laya.Image;
		public yImg:Laya.Image;
		public mapList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":900,"height":760},"child":[{"type":"Panel","props":{"var":"panel","vScrollBarSkin":"comp/vscroll.png","top":0,"right":0,"left":200,"hScrollBarSkin":"comp/hscroll.png","bottom":0},"child":[{"type":"Box","props":{"y":380,"x":350,"width":500,"var":"box","height":500,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"jImg"}},{"type":"Image","props":{"var":"img"}},{"type":"Image","props":{"var":"yImg"}}]}]},{"type":"List","props":{"width":200,"var":"mapList","vScrollBarSkin":"comp/vscroll.png","top":0,"left":0,"bottom":0},"child":[{"type":"MapItem","props":{"runtime":"editor.MapItem","name":"render"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("editor.MapItem",editor.MapItem);

            super.createChildren();
            this.createView(ui.test.EditViewUI.uiView);
        }
    }
}

module ui.test {
    export class MapItemUI extends View {
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":100},"child":[{"type":"Image","props":{"width":200,"var":"img","skin":"comp/image.png","height":100}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.MapItemUI.uiView);
        }
    }
}

module ui.test {
    export class TestPageUI extends View {
		public editView:editor.EditView;
		public inputPath:Laya.TextInput;
		public outputPath:Laya.TextInput;
		public inputCellWidth:Laya.TextInput;
		public inputCellHeight:Laya.TextInput;
		public txtMousePos:laya.display.Text;
		public txtMousePos2:laya.display.Text;
		public btn:Laya.Button;
		public radioGroup2:Laya.RadioGroup;
		public txtAphal1:Laya.TextInput;
		public txtAphal2:Laya.TextInput;
		public txtAphal3:Laya.TextInput;
		public txtAphal4:Laya.TextInput;
		public txtAphal5:Laya.TextInput;
		public txtAphal6:Laya.TextInput;
		public cb2:Laya.CheckBox;
		public cb1:Laya.CheckBox;
		public cb4:Laya.CheckBox;
		public cb3:Laya.CheckBox;
		public cb6:Laya.CheckBox;
		public cb5:Laya.CheckBox;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":760},"child":[{"type":"EditView","props":{"var":"editView","top":0,"runtime":"editor.EditView","right":390,"left":0,"bottom":0}},{"type":"TextInput","props":{"y":35,"x":945,"width":244,"var":"inputPath","strokeColor":"#000000","stroke":2,"prompt":"?????????????????????","height":22,"color":"#ffffff"}},{"type":"TextInput","props":{"y":65,"x":945,"width":244,"var":"outputPath","strokeColor":"#000000","stroke":2,"prompt":"?????????????????????","height":22,"color":"#ffffff"}},{"type":"Text","props":{"y":102,"x":949,"width":301,"text":"???????????????S??????????????????????????????","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":122,"x":949,"width":301,"text":"????????????????????????2???n??????????????????????????????????????????","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":152,"x":949,"width":301,"text":"?????????????????????????????????????????????","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":182,"x":949,"width":23,"text":"x:","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":182,"x":1009,"width":23,"text":"y:","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":178,"x":965,"width":35,"var":"inputCellWidth","text":"16","strokeColor":"#000000","stroke":2,"prompt":"16","height":22,"color":"#ffffff"}},{"type":"TextInput","props":{"y":178,"x":1022,"width":35,"var":"inputCellHeight","text":"16","strokeColor":"#000000","stroke":2,"prompt":"16","height":22,"color":"#ffffff"}},{"type":"Text","props":{"y":202,"x":949,"width":301,"var":"txtMousePos","text":"???????????????????????????","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":222,"x":949,"width":301,"var":"txtMousePos2","text":"???????????????????????????","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Button","props":{"y":161,"x":1135,"width":131,"var":"btn","skin":"comp/button.png","label":"??????????????????","height":26}},{"type":"RadioGroup","props":{"y":355,"x":989,"width":284,"var":"radioGroup2","space":5,"skin":"comp/radiogroup.png","labels":"??????,??????,??????,??????,?????????,??????","height":14}},{"type":"Text","props":{"y":355,"x":932,"width":57,"text":"????????????","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":315,"x":932,"width":57,"text":"????????????","strokeColor":"#000000","stroke":2,"height":18,"color":"#ffffff"}},{"type":"Text","props":{"y":335,"x":932,"width":57,"text":"?????????","stroke":2,"height":18,"color":"#ffffff"}},{"type":"TextInput","props":{"y":331,"x":993,"width":34,"var":"txtAphal1","text":"0.7","strokeColor":"2","prompt":"0.7","height":22}},{"type":"TextInput","props":{"y":331,"x":1033,"width":34,"var":"txtAphal2","text":"0.7","strokeColor":"2","prompt":"0.7","height":22}},{"type":"TextInput","props":{"y":331,"x":1077,"width":34,"var":"txtAphal3","text":"0.7","strokeColor":"2","prompt":"0.7","height":22}},{"type":"TextInput","props":{"y":331,"x":1119,"width":34,"var":"txtAphal4","text":"0.7","strokeColor":"2","prompt":"0.7","height":22}},{"type":"TextInput","props":{"y":331,"x":1169,"width":34,"var":"txtAphal5","text":"0.7","strokeColor":"2","prompt":"0.7","height":22}},{"type":"TextInput","props":{"y":331,"x":1218,"width":34,"var":"txtAphal6","text":"0.7","strokeColor":"2","prompt":"0.7","height":22}},{"type":"CheckBox","props":{"y":314,"x":1032,"var":"cb2","skin":"comp/checkbox.png","label":"??????"}},{"type":"CheckBox","props":{"y":314,"x":991,"var":"cb1","skin":"comp/checkbox.png","label":"??????"}},{"type":"CheckBox","props":{"y":314,"x":1119,"var":"cb4","skin":"comp/checkbox.png","label":"??????"}},{"type":"CheckBox","props":{"y":314,"x":1078,"var":"cb3","skin":"comp/checkbox.png","label":"??????"}},{"type":"CheckBox","props":{"y":314,"x":1217,"var":"cb6","skin":"comp/checkbox.png","label":"??????"}},{"type":"CheckBox","props":{"y":314,"x":1165,"var":"cb5","skin":"comp/checkbox.png","label":"?????????"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("editor.EditView",editor.EditView);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);
        }
    }
}
