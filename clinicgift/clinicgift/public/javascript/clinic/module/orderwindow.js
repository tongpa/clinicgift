Ext.define('clinic.module.OrderWindow',{
	extend: 'Ext.ux.desktop.Module',
	requires: [
	           'Ext.data.ArrayStore',
	           'Ext.util.Format',
	           'Ext.grid.Panel',
	           'Ext.grid.RowNumberer'
	       ],
	alias: 'widget.orderWindow',
	id:'order-win',

	init : function(){
        this.launcher = {
            text: 'Order Item',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
    	
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('order-win');
        console.log('win' + (!win) );
        if(!win){
        	console.log('call personview');
        	var order = new Ext.create('clinic.panel.order.OrderView',{
        			listeners : {
        				
        			}
        			});
        	
            win = desktop.createWindow({
                id: 'order-win',
                title:'Order Item',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [order ]
                 
            });
        }
        return win;
    }
});