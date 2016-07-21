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

	init : function(){
        this.launcher = {
            text: 'Patient Service',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
    	
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('gridpatientservice-win');
        console.log('win' + (!win) );
        if(!win){
        	
        	var grid = Ext.create('clinic.panel.visit.ListPatientInServiceView',{
        		
        		listeners : {
        			showVisit : function(cmp,record) {
    					console.log('showVisit');
    					var vitalsign_win = desktop.app.getModule('vitalsign-win');
    					vitalsign_win.loaddata(record);
    					vitalsign_win.createWindow(record).show();
    					//debugger;
    		     //       this.parentForm.refreshOther();
    		        }
    			}
        	});
        	 
            win = desktop.createWindow({
                id: 'gridpatientservice-win',
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