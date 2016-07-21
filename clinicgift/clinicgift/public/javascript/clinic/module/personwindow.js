Ext.define('clinic.module.PersonWindow',{
	extend: 'Ext.ux.desktop.Module',
	requires: [
	           'Ext.data.ArrayStore',
	           'Ext.util.Format',
	           'Ext.grid.Panel',
	           'Ext.grid.RowNumberer'
	       ],
	alias: 'widget.PersonWindow',
	id:'person-win',

	init : function(){
        this.launcher = {
            text: 'Person',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
    	
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('person-win');
        console.log('win' + (!win) );
        if(!win){
        	console.log('call personview');
        	var person = new Ext.create('clinic.panel.person.PersonView',{
        			listeners : {
        				callVisit : function(cmp,record) {
        					console.log('callvisit');
        					var visit_win = desktop.app.getModule('visit-win');
        					visit_win.loaddata(record);
        					visit_win.createWindow(record).show();
        					//debugger;
        		     //       this.parentForm.refreshOther();
        		        }
        			}
        			});
        	
            win = desktop.createWindow({
                id: 'person-win',
                title:'Person',
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