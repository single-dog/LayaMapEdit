/**
* name 
*/
module editor{
	export class EditView extends ui.test.EditViewUI{
		constructor(){
			super();
		}

        public createChildren(): void{
			super.createChildren()
			this.img.skin = "res/map/1001.png"
		}


	}
}