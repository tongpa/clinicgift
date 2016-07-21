Ext.define('clinic.panel.vitalsign.PatientVitalSignView',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.patientvitalsignview',
	scrollable:true
	,bodyPadding: 5
	,defaults: {
   	    labelWidth: 120,
        anchor: '100%'
       // ,layout: {   type: 'fix' }
        //msgTarget: 'side'
    },
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
	fieldDefaults: {
	    //labelAlign: 'right',
	    //labelWidth: 115,
		msgTarget: 'side'
	},
    initData : function(record){
    	this.initValue = record;
    	this.listvitalsign.initData(record);
    	this.vitalsign.initData(record);
    }
	,initComponent: function () {
		var main = this;
		
		
		main.listvitalsign = Ext.create('clinic.panel.vitalsign.ListVitalSignView',{
			
			listeners : {
				showVitalSign : function(cmp,record) {
					main.vitalsign.loadRecord(record);
					
		        }
			}
		});
		main.vitalsign = Ext.create('clinic.panel.vitalsign.VitalSignView',{
			
			listeners : {
				refresh : function(cmp,idsearch) {
					main.listvitalsign.searchdata(idsearch);
					
		        }
			}
		});
		
		main.items = [
				        {
				        	flex: 1,
				            margin: '0 10 0 0',
				            items : [main.listvitalsign]
				        },
				        {
				        	
				            flex: 2,
				            margin: '0 10 0 0'
				            ,items : [main.vitalsign]
				        }
				         
		               	];
		
		main.callParent();
	}
});