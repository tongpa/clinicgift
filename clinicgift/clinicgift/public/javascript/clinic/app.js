//Ext.namespace("clinic");

Ext.Loader.setConfig({
    enabled: true,
    paths: {
    	'Ext.ux': '/javascript/extjs/packages/ux/classic'
        
    }
});

Ext.application({
    name: 'clinic',
    appFolder : 'javascript/clinic',
    //models : ['fixdata'],
    //stores : ['masterstore','prefixdata'],
    
    launch: function() {
    	Ext.tip.QuickTipManager.init();
    	/*	
        var person = Ext.create('clinic.panel.appointment.AppointmentView',{
        	
            });
        
        var winn = Ext.create('Ext.window.Window', {
            title: 'Hello',
            height: 200,
            width: 400,
            layout: 'fit',
            items: [person]
        });
       
        winn.show();
    
        Ext.create('Ext.container.Viewport', {
        	id: 'SchoolViewport',
        	
        	 style : 'background-image:url(/img/desktop3.jpg);background-repeat: no-repeat;filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=\'scale\')";-moz-background-size:100% 100%;background-size:100% 100%;', 
        	 layout : { type : 'vbox', align : 'center', pack : 'center' } 
        	 
        	
        });
        */

        Ext.create('clinic.panel.DesktopApp',{
        	 
        });
    }
});

