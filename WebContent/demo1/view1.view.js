sap.ui.jsview("demo1.view1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo1.view1
	*/ 
	getControllerName : function() {
		return "demo1.view1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo1.view1
	*/ 
	createContent : function(oController) {
		var text1= new sap.m.Text({
			text: "Hello world"
			
		});
		
		var label1=new sap.m.Label({
		      text:"User name"
		    	  })
		var label2=new sap.m.Label({
			text:"password"
		})
		var input1=new sap.m.Input	({
			type:"Text",
		    placeholder:"enter user name"
		})
		
		var input2=new sap.m.Input({
			type:"Password",
			placeholder:"enter password"
		})
		var button=new sap.m.Button({
			type:"Accept",
			text:"click me",
			press:"onPress",
			appto:"view2.view.js"
			
		})   
		
 		return new sap.m.Page({
			title: "Login Page",
			content: [ text1,label1,input1,label2,input2,button
		
			]
		});
	}

});