Ext.define('clinic.panel.menu.MenuView',{
	extend: 'Ext.toolbar.Toolbar'
	,alias: 'widget.MenuView'
	,dock: 'top'
    ,initData : function(record){
    	this.record = record;
    }
    ,loadRecord : function(record){
    	
    }
	,initComponent: function () {
		var main = this;
		main.sendPatient = Ext.create('Ext.Button',{
			text: 'send Patient',
			handler : function(bt,ev){
				main.fireEvent('sendPatient', this, main.record);
			}});
		
		main.items = [main.sendPatient ];
		
		main.callParent();
	}
});