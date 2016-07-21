Ext.namespace("clinic");

Ext.application({
    name: 'clinic',
    appFolder : 'javascript/clinic',
    //-------------------------------------------------------------------------
    // Most customizations should be made to Desktop.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    launch: function() {
    	Ext.tip.QuickTipManager.init();
    	
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
    /*
        Ext.create('Ext.container.Viewport', {
        	id: 'SchoolViewport',
        	
        	 style : 'background-image:url(/img/desktop3.jpg);background-repeat: no-repeat;filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=\'scale\')";-moz-background-size:100% 100%;background-size:100% 100%;', 
        	 layout : { type : 'vbox', align : 'center', pack : 'center' } 
        	 
        	
        });
        */
        Ext.create('Ext.ux.desktop.App',{
        	wallpaper: 'img/desktop3.jpg',
            wallpaperStretch: false
        });
    }
});

