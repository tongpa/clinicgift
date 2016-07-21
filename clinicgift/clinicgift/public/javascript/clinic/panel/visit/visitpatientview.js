Ext.define('clinic.panel.visit.VisitPatientView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.visitpatientview',
	scrollable:true
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
	},
    loadRecord : function(record){
    	this.record = record;
    	this.idperson.setValue(this.record.data.id_person);
    }
	,initComponent: function () {
		var main = this;
		
		main.servicestore = Ext.create('clinic.store.ServicePointData');
		main.servicestore.load();
		
		main.clinicstore = Ext.create('clinic.store.ClinicData');
		main.clinicstore.load();
		
		main.doctorstore = Ext.create('clinic.store.DoctorData');
		main.doctorstore.load();
		
		
		main.idperson = Ext.create('Ext.form.field.Hidden',{ name:'id_person'});
		main.idvisit = Ext.create('Ext.form.field.Hidden',{ name:'id_visit'});
		main.idservice = Ext.create('Ext.form.field.Hidden',{ name:'id_service'});
		
		main.service = Ext.create('Ext.form.ComboBox',{ allowBlank:false,name:'id_service_point',fieldLabel:'Service',
			allowBlank: false ,
			store: main.servicestore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Service Point'  
			//,emptyText: 'Service Point'
				});
		main.clinic = Ext.create('Ext.form.ComboBox',{ allowBlank:false,name:'id_clinic',fieldLabel:'Clinic',
			allowBlank: true ,
			store: main.clinicstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Clinic'
		    //,emptyText: 'Clinic'
		    	});
		main.doctor = Ext.create('Ext.form.ComboBox',{name:'id_doctor',fieldLabel:'Doctor',
			allowBlank: true ,
			store: main.doctorstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Doctor'
		    //,emptyText: 'Doctor'
		    	});
		
		
		
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Visit',
			defaults: {
				anchor: '100%'
			},
			items: [main.idperson,main.idvisit,main.idservice,
	               	main.service, main.clinic ,main.doctor
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
	                	url: '/visit/save',
	                	scope: this,
	                	method: 'POST',
	                	 
	                	waitMsg: 'please wait' ,
	                    success: function(form, action) {
	                    	console.log(action);
	                    	if( action.result.success){
	                    		//debugger;
	                    		form.reset();
	                    		Ext.Msg.alert( 'success' , action.result.message);
	                    		bt.ownerCt.ownerCt.fireEvent('closeWin', this);
		                    	
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