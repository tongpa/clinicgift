Ext.define('clinic.panel.address.AddressView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.addressview'	
	,defaults: {
   	    anchor: '100%',
        layout: {   type: 'fix' }        
    },
	fieldDefaults: {	   
		msgTarget: 'side'
	}
	,initComponent: function () {
		var main = this;
		
		main.houseno = Ext.create('Ext.form.field.Text',{name:'houseno',fieldLabel:'House No.',emptyText: 'House No.'});
		main.villageno = Ext.create('Ext.form.field.Text',{ name:'villageno',fieldLabel:'Moo',emptyText: 'Moo'});
		main.road = Ext.create('Ext.form.field.Text',{ allowBlank:true,name:'road',fieldLabel:'Alley/Lane/Road',emptyText: 'Alley/Lane/Road'});
		main.province = Ext.create('Ext.form.field.Text',{name:'province',fieldLabel:'Province',emptyText: 'Province'});
		main.district = Ext.create('Ext.form.field.Text',{name:'sistrict',fieldLabel:'District',emptyText: 'District'});
		main.subdistrict = Ext.create('Ext.form.field.Text',{name:'subdistrict',fieldLabel:'Sub-District',maxValue: new Date(),emptyText: 'Sub-District' });
		
		main.country = Ext.create('Ext.form.field.Text',{allowBlank:true,name:'country',fieldLabel:'Country',maxValue: new Date(),emptyText: 'Country' });
		main.postalcode = Ext.create('Ext.form.field.Text',{name:'postalcode',fieldLabel:'Postal Code',maxValue: new Date(),emptyText: 'Postal Code' });
		
		main.contacttelephone = Ext.create('Ext.form.field.Text',{name:'telephone',fieldLabel:'Telephone',emptyText: 'Telephone'});
		main.contactmobile = Ext.create('Ext.form.field.Text',{name:'mobile',fieldLabel:'Mobile',emptyText: 'Mobile'});
		
		  
		
		main.items = [main.houseno ,main.villageno ,main.road ,main.province
		          	,main.district,main.subdistrict ,main.country ,main.postalcode 
		        	,main.contacttelephone ,main.contactmobile];
		
		
		main.callParent();
	}
});