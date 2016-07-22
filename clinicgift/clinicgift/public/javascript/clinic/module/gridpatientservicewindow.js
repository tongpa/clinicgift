Ext.define('clinic.module.GridPatientServiceWindow',{
	extend: 'Ext.ux.desktop.Module',
	requires: [
	           'Ext.data.ArrayStore',
	           'Ext.util.Format',
	           'Ext.grid.Panel',
	           'Ext.grid.RowNumberer'
	       ],
	alias: 'widget.gridwindow',
	id:'gridpatientservice-win',
	showmodule : 'vitalsign-win',
	init : function(){
        this.launcher = {
            text: 'Patient Service',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
    	 
    	var main = this;
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow(this.id);//'gridpatientservice-win');
        console.log('win' + (!win) );
        if(!win){
        	
        	var grid = Ext.create('clinic.panel.visit.ListPatientInServiceView',{
        		
        		listeners : {
        			showVisit : function(cmp,record) {
        				var vitalsign_win = desktop.app.getModule(main.showmodule);
    					vitalsign_win.loaddata(record);
    					vitalsign_win.createWindow(record).show();
    		        }
    			}
        	});
        	 
            win = desktop.createWindow({
                id: main.id,//'gridpatientservice-win',
                title:'Patient Service',
                width:350,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [grid]
            });
        }
        return win;
    
    }
});