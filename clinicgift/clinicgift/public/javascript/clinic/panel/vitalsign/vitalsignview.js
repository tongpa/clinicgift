Ext.define('clinic.panel.vitalsign.VitalSignView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.vitalsignview',
	scrollable:true
	,border : false
	,bodyPadding: 5
	,defaults: {
   	    labelWidth: 120,
        anchor: '100%',
        layout: {   type: 'fix' }
        //msgTarget: 'side'
    },
	fieldDefaults: {
	    //labelAlign: 'right',
	    //labelWidth: 115,
		msgTarget: 'side'
	}
    ,initData : function(record){
    	this.id_visit = record.data.id_visit;
    	this.idvisit.setValue(record.data.id_visit);
    }
    ,loadRecord : function(record){
    	this.getForm().loadRecord(record);
    }
	,initComponent: function () {
		var main = this;
		
		main.idvitalsign = Ext.create('Ext.form.field.Hidden',{ name:'id_vitalsign'});
		main.idvisit = Ext.create('Ext.form.field.Hidden',{ name:'id_visit'});
		
		main.weight = Ext.create('Ext.form.field.Number',{ allowBlank:false,name:'weight',fieldLabel:'Weight(Kg.)',emptyText: 'Weight(Kg.)',minValue: 0, allowDecimals: true});
		main.temperature = Ext.create('Ext.form.field.Number',{ allowBlank:false,name:'temperature',fieldLabel:'Temperature',emptyText: 'Temperature',minValue: 0, allowDecimals: true});
		main.pulse = Ext.create('Ext.form.field.Number',{ allowBlank:false,name:'pulse',fieldLabel:'Pulse',emptyText: 'Pulse',minValue: 0, allowDecimals: true});
		main.pressure = Ext.create('Ext.form.field.Number',{ allowBlank:false,name:'pressure',fieldLabel:'Pressure',emptyText: 'Pressure',minValue: 0, allowDecimals: true});
		main.height = Ext.create('Ext.form.field.Number',{ allowBlank:false,name:'height',fieldLabel:'Height(cm.)',emptyText: 'Height(cm.)',minValue: 0, allowDecimals: true});
		main.bmi = Ext.create('Ext.form.field.Number',{ allowBlank:false,name:'bmi',fieldLabel:'BMI',emptyText: 'BMI',minValue: 0, allowDecimals: true});
		
		main.cc = Ext.create('Ext.form.field.TextArea',{allowBlank:true,name:'cc',fieldLabel:'CC',emptyText: 'CC' });
		main.pmh = Ext.create('Ext.form.field.TextArea',{allowBlank:true,name:'pmh',fieldLabel:'PMH',emptyText: 'PMH' });
		main.fh = Ext.create('Ext.form.field.TextArea',{allowBlank:true,name:'fh',fieldLabel:'FH',emptyText: 'FH' });
		main.hpi = Ext.create('Ext.form.field.TextArea',{allowBlank:true,name:'hpi',fieldLabel:'HPI',emptyText: 'HPI' });
		main.pe = Ext.create('Ext.form.field.TextArea',{allowBlank:true,name:'pe',fieldLabel:'PE',emptyText: 'PE' });
		
		
		
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Visit',
			defaults: {
				anchor: '100%'
			},
			items: [main.idvitalsign,main.idvisit,
	               	main.weight, main.temperature ,main.pulse,main.pressure, main.height ,main.bmi,
	               	main.cc, main.pmh, main.fh, main.hpi, main.pe
	               	]

			});
		
		main.btsave = Ext.create('Ext.Button',{		 
			text : 'Send',
			 
			formBind: true,  
	        disabled: true,
			handler : function(bt,ev){
				var form = this.up('form').getForm();
				
	            if (form.isValid()) {
	            	
	                form.submit({
	                	url: '/vitalsign/save',
	                	scope: this,
	                	method: 'POST',
	                	 
	                	waitMsg: 'please wait' ,
	                    success: function(form, action) {
	                    	console.log(action);
	                    	if( action.result.success){
	                    		
	                    		main.id_visit = main.idvisit.getValue();
	                    		Ext.Msg.alert( 'success' , action.result.message);
	                    		bt.ownerCt.ownerCt.fireEvent('refresh', this,main.id_visit);
	                    		form.reset();
	                    		
	                    		
	                        	main.idvisit.setValue(main.id_visit);
	                    	}
	                    	else{
	                    		//Ext.Msg.alert(survey.message.success, action.result.message);
	                    	}
	                    		
	                    	
	                    	//main.refreshOther();
	                    },
	                    failure: function(form, action) {
	                    	 
	                    	if (action.response.status = '404'){
	                    		
	                    		//Ext.Msg.alert(survey.message.failed, action.response.statusText);
	                    		//main.closeWindow(main,bt); 
	                    	}
	                    	else{
	                    		//Ext.Msg.alert(survey.message.success, action.result.message);
	                    	}
	                        
	                    }
	                });
	            }

			}
		});
		
		main.items = [main.fieldset];
		main.buttons = [ main.btsave];
		
		main.callParent();
	}
});