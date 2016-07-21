Ext.define('clinic.panel.person.PersonAddressView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.PersonAddressView',
	scrollable:true
	,bodyPadding: 5
	,defaults: {
   	    labelWidth: 120,
        anchor: '100%',
        layout: {   type: 'fix' }
        //msgTarget: 'side'
    },
	fieldDefaults: {
	    //labelAlign: 'right',
	    //labelWidth: 115,
		msgTarget: 'side'
	}
	,initComponent: function () {
		var main = this;
		
		main.addresstype = Ext.create('Ext.form.ComboBox',{name:'addresstype',fieldLabel:'Address Type'});
		main.contactaddress = Ext.create('clinic.panel.address.AddressView');
		
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Address Information',
			defaults: {
				anchor: '100%'
			},
			items: [	main.addresstype,
			        	main.contactaddress
	               	 
		               
	               	]

			});
		
		main.btsave = Ext.create('Ext.Button',{		 
			text : 'Save',
			 
			formBind: true,  
	        disabled: true,
			handler : function(bt,ev){}
		});
		
		main.items = [main.fieldset];
		main.buttons = [ main.btsave];
		
		main.callParent();
	}
});