Ext.define('clinic.module.VisitWindow',{
	extend: 'Ext.ux.desktop.Module',
	requires: [
	           'Ext.data.ArrayStore',
	           'Ext.util.Format',
	           'Ext.grid.Panel',
	           'Ext.grid.RowNumberer'
	       ],
	alias: 'widget.visitwindow',
	id:'visit-win',

	init : function(){
        this.launcher = {
            text: 'Visit',
            iconCls:'icon-grid'
        };
    },
    loaddata : function(record){
    	
    },
    createWindow : function(record){
    	
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('visit-win');
        
        if(!win){
        	 
        	var visit = Ext.create('clinic.panel.visit.VisitPatientView',{
        		
        		listeners : {
        			closeWin : function(cmp) {
    					console.log('closeWin');
    					win.close();
    		        }
    			}
        	});
        	visit.loadRecord(record);
            win = desktop.createWindow({
                id: 'visit-win',
                title:'Visit Patient',
                width:400,
                height:300,
                iconCls: 'icon-grid',
                //animCollapse:false,
                //constrainHeader:true,
                layout: 'fit',
                items: [
                    visit
                ]             });
        }
        return win;
    } 
});