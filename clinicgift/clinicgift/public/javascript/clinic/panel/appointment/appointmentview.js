Ext.define('clinic.panel.appointment.AppointmentView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.appointmentview'	
	,scrollable:true
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
	,initComponent: function () {
		var main = this;
		
		main.date = Ext.create('Ext.form.field.Date',{name:'dateappoint',fieldLabel:'Date',emptyText: 'Date' ,minValue: new Date()});
		main.time = Ext.create('Ext.form.field.Text',{ name:'timeappoint',fieldLabel:'Time',emptyText: 'Time'});
		main.clinic = Ext.create('Ext.form.ComboBox',{ allowBlank:true,name:'clinicappoint',fieldLabel:'Clinic',emptyText: 'Clinic'});
		main.cause = Ext.create('Ext.form.ComboBox',{name:'cause',fieldLabel:'Cause',emptyText: 'Cause'});
		main.doctor = Ext.create('Ext.form.ComboBox',{name:'doctor',fieldLabel:'Doctor',emptyText: 'Doctor'});
		main.creator = Ext.create('Ext.form.ComboBox',{name:'creator',fieldLabel:'Creator',maxValue: new Date(),emptyText: 'Creator' });
		
		main.description = Ext.create('Ext.form.field.TextArea',{allowBlank:true,name:'description',fieldLabel:'Description',emptyText: 'Description' });
		 
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Appointment',
			defaults: {
				anchor: '100%'
			},
			items: [main.date ,main.time ,main.clinic ,main.cause
		          	,main.doctor,main.creator ,main.description]

			});
		main.btsave = Ext.create('Ext.Button',{		 
			text : 'Save',
			 
			formBind: true,  
	        disabled: true,
			handler : function(bt,ev){}
		});
		
		main.items = [main.fieldset];
		main.buttons = [ main.btsave];
		
		main.callParent();
	}
});