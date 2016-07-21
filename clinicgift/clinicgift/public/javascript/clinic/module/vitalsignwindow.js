Ext.define('clinic.module.VitalSignWindow',{
	extend: 'Ext.ux.desktop.Module',
	requires: [
	           'Ext.data.ArrayStore',
	           'Ext.util.Format',
	           'Ext.grid.Panel',
	           'Ext.grid.RowNumberer'
	       ],
	alias: 'widget.vitalsignwindow',
	id:'vitalsign-win',

	init : function(){
        this.launcher = {
            text: 'VitalSign',
            iconCls:'icon-grid'
        };
    },
    loaddata :function(record){},
    createWindow : function(record){
    	
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('vitalsign-win');
        
        if(!win){
        	 
        	var vitalsign = Ext.create('clinic.panel.vitalsign.PatientVitalSignView');
        	vitalsign.initData(record);
            win = desktop.createWindow({
                id: 'vitalsign-win',
                title:'VitalSign',
                width:600,
                height:500,
                iconCls: 'icon-grid',
                scrollable:true,
                //animCollapse:false,
                //constrainHeader:true,
                layout: 'fit',
                items: [
                        	vitalsign
                ]             });
        }
        return win;
    } 
});