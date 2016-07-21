Ext.define('clinic.panel.person.PersonContactView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.personcontactview',
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
		
		main.contactname = Ext.create('Ext.form.ComboBox',{name:'contactname',fieldLabel:'Contact Name'});
		main.relationship = Ext.create('Ext.form.field.Text',{ allowBlank:false,name:'relationship',fieldLabel:'Relationship',emptyText: 'Relationship ห'});
		
		main.contactaddress = Ext.create('clinic.panel.address.AddressView');
		
		
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Person Information',
			defaults: {
				anchor: '100%'
			},
			items: [
	               	main.contactname,main.relationship ,main.contactaddress
		               
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