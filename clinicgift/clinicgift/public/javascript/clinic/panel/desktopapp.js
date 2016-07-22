Ext.define('clinic.panel.DesktopApp',{
	extend: 'Ext.ux.desktop.App',
	alias: 'widget.desktopapp',
	 requires: [
	            'Ext.window.MessageBox',

	            'Ext.ux.desktop.ShortcutModel',
	            'clinic.module.GridWindow',
	            'clinic.module.SystemStatus',
	            'clinic.module.PersonWindow',
	            'clinic.module.AppointmentWindow',
	            'clinic.module.GridPatientServiceWindow',
	            'clinic.module.VitalSignWindow'
	            ]
	,init: function() {
		console.log('init');
       this.callParent();
	},
	getModules : function(){
		console.log('module');
		
		var serviceindoctor = new Ext.create('clinic.module.GridPatientServiceWindow',{
			id:'gridpatientservice-win'
		});
		
		
        return [
                new Ext.create('clinic.module.SystemStatus'),
                new Ext.create('clinic.module.GridWindow'),
                new Ext.create('clinic.module.PersonWindow'),
                new Ext.create('clinic.module.AppointmentWindow'),
                new Ext.create('clinic.module.VisitWindow'),
                new Ext.create('clinic.module.GridPatientServiceWindow'),
                new Ext.create('clinic.module.VitalSignWindow') 
        ];
    },
    getDesktopConfig: function () {
        var me = this, ret = me.callParent();
        console.log('getdesktopconfig');
        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                       { name: 'Person', iconCls: 'accordion-shortcut', module: 'person-win'},
                       { name: 'Appointment', iconCls: 'grid-shortcut', module: 'appointment-win' },                       
                       //{ name: 'Grid Window', iconCls: 'grid-shortcut', module: 'grid-win' },                    
                       //{ name: 'Visit Patient', iconCls: 'accordion-shortcut', module: 'visit-win' },
                       { name: 'Patient in Screen', iconCls: 'notepad-shortcut', module: 'gridpatientservice-win' },
                       //{ name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'},
                       //{ name: 'Vital Sign', iconCls: 'accordion-shortcut', module: 'vitalsign-win'}
                ]
            }),

            wallpaper: 'img/desktop3.jpg',
            wallpaperStretch: false
        });
    },
    getStartConfig : function() {
        var me = this, ret = me.callParent();
        console.log('getstartconfig');
        return Ext.apply(ret, {
            title: 'Don Griffin',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Settings',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();
        console.log('gettaskbarconfig');
        return Ext.apply(ret, {
            quickStart: [
                { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
                { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },
    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
    },
    onSettings: function () {
        
    }
});