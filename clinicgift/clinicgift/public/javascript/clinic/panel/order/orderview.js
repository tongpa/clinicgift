Ext.define('clinic.panel.order.OrderView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.orderview',
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
		
		main.listSearch = Ext.create('clinic.panel.order.ListSearchItemView');
		
		main.items = [main.listSearch ];
		
		main.callParent();
	},
	
});