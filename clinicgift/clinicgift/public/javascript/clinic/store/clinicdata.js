Ext.define('clinic.store.ClinicData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.clinicData'],
	storeId : 'clinicStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getClinicData',    	
		api: {
            read: '/script/getClinicData',
            create: '/script/getClinicData',
            update: '/script/getClinicData',
            destroy: '/script/getClinicData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

