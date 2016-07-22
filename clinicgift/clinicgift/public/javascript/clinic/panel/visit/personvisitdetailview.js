Ext.define('clinic.panel.visit.PersonVisitDetailView',{
	extend: 'Ext.panel.Panel'
	,alias: 'widget.personvisitdetailview'
	,scrollable:true
	,margin: '0 5 0 5'
	//,bodyPadding: 5
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
    	console.log(record);
    	var main = this;
    	this.patientname.setText(record.data.patient_name);
    	
    	this.personstore.load({
    		params : {
				idsearch : record.data.id_person
			},
			callback :  function(records, operation, success) {
		    	 
		    	
		    	if(success){
		    		if (records.length >0){
		    			main.patientdrugalert.setText('แพ้ยา : ' + records[0].data.drugalert);
		    			main.patientgender.setText('เพศ : ' + records[0].data.gender);
		    			main.patientbloodgroup.setText('กลุ่มเลือด  : ' + records[0].data.bloodgroup );
		    			main.patientpid.setText('PID : ' + records[0].data.pid );
		    		}
		    	}
		         
		    },
			 
			scope:this
    	});
    	
    }
	,initComponent: function () {
		var main = this;
		
		main.personstore = new Ext.create('clinic.store.PersonData');
		
		main.idperson = Ext.create('Ext.form.field.Hidden',{ name:'id_person'});
		main.idvisit = Ext.create('Ext.form.field.Hidden',{ name:'id_visit'});
		
		main.patientname = Ext.create('Ext.form.Label',{
			forId: 'patientname',
	        text: 'ผดุงรัฐ มากชู',
	        margin: '0 0 0 10'
		});
		
		main.patientage = Ext.create('Ext.form.Label',{
			forId: 'patientage',
	        text: 'อายุ 30 ปี ',
	        margin: '0 0 0 10'
		});
		
		main.patientgender = Ext.create('Ext.form.Label',{
			forId: 'patientgender',
	        text: 'เพศ ',
	        margin: '0 0 0 10'
		});
		
		main.patientdrugalert = Ext.create('Ext.form.Label',{
			forId: 'patientdrugalert',
	        text: 'แพ้ยา',
	        margin: '0 0 0 10'
		});
		
		main.patientbloodgroup = Ext.create('Ext.form.Label',{
			forId: 'patientbloodgroup',
	        text: 'กลุ่มเลือด :',
	        margin: '0 0 0 10'
		});
		
		main.patientpid = Ext.create('Ext.form.Label',{
			forId: 'patientpid',
	        text: 'PID :',
	        margin: '0 0 0 10'
		});
		
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Person Information',
			defaults: {
				anchor: '100%'
			},
			layout: {
		        type: 'hbox',
		        align: 'middle'
		    },
			items: [main.idperson, main.idvisit, main.patientname,main.patientage, main.patientpid,main.patientgender,main.patientbloodgroup, main.patientdrugalert
	               	]

			});
		
		 
		
		main.items = [main.fieldset]; 
		 
		main.callParent();
	}
});