Ext.define('clinic.module.AppointmentWindow',{
	extend: 'Ext.ux.desktop.Module',
	requires: [
	           'Ext.data.ArrayStore',
	           'Ext.util.Format',
	           'Ext.grid.Panel',
	           'Ext.grid.RowNumberer'
	       ],
	alias: 'widget.appointmentwindow',
	id:'appointment-win',

	init : function(){
        this.launcher = {
            text: 'Appointment',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
    	
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('appointment-win');
        console.log('win' + (!win) );
        if(!win){
        	
        	var person = new Ext.create('clinic.panel.appointment.AppointmentView');
        	
            win = desktop.createWindow({
                id: 'appointment-win',
                title:'Appointment',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [person ]
                 
            });
        }
        return win;
    } 
});