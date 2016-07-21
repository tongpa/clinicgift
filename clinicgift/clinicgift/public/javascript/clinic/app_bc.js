/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 
Ext.application({
    name: 'Desktop',
    appFolder : 'javascript/clinic/',
    //-------------------------------------------------------------------------
    // Most customizations should be made to Desktop.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    requires: [
        'Desktop.App'
    ],
    init: function() {
        var app = new Desktop.App();
    }
});
*/
Ext.require([
    'Ext.window.Window',
    'Ext.tab.*',
    'Ext.toolbar.Spacer',
    'Ext.layout.container.Card',
    'Ext.layout.container.Border'
]);
Ext.onReady(function(){
	
	
	
	var desktop = Ext.create('Ext.ux.desktop.App',{
		wallpaper: '/javascript/clinic/resources/images/wallpapers/Blue-Sencha.jpg',
        wallpaperStretch: false
	});
	
	var winDesktop = Ext.create('Ext.window.Window',{
		
	});
	//winDesktop.show();
});
