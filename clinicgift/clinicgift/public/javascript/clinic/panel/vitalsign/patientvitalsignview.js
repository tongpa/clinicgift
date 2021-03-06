﻿Ext.define('clinic.panel.vitalsign.PatientVitalSignView',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.patientvitalsignview',
	scrollable:true
	,bodyPadding: 5
	,frame : false
	,defaults: {
   	    labelWidth: 120,
        anchor: '100%'
       // ,layout: {   type: 'fix' }
        //msgTarget: 'side'
    },
   /* layout: {
        type: 'border'
      //  pack: 'start',
      //  align: 'stretch'
    },*/
	fieldDefaults: {
	    //labelAlign: 'right',
	    //labelWidth: 115,
		msgTarget: 'side'
	},
    initData : function(record){
    	this.initValue = record;
    	this.listvitalsign.initData(record);
    	this.vitalsign.initData(record);
    	this.patient.initData(record);
    	this.menuview.initData(record);
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
		
		main.patient = Ext.create('clinic.panel.visit.PersonVisitDetailView' );
		
		main.panel = Ext.create('Ext.panel.Panel',{
			 
			layout: {
		        type: 'hbox',
		        pack: 'start',
		        align: 'stretch'
		    },
		    items : [
				        {
				        	flex: 1,
				            margin: '0 5 0 5',
				            items : [main.listvitalsign]
				        },
				        {
				        	
				            flex: 2,
				            margin: '0 5 0 0'
				            ,items : [main.vitalsign]
				        }
				         
		               	]
		});
		
	 
		
		main.menuview = Ext.create('clinic.panel.menu.MenuView',{
			listeners : {
				sendPatient : function(cmp,record) {
					console.log(record);
					main.fireEvent('sendPatient', this,record);
		        }
			}
		});
		main.dockedItems= [ main.menuview ,main.patient ];
		//main.patient ,
		main.items = [ main.panel  ];
		
		main.callParent();
	}
});