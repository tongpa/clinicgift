Ext.define('clinic.store.DoctorData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.doctorData'],
	storeId : 'doctorStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getDoctorData',    	
		api: {
            read: '/script/getDoctorData',
            create: '/script/getDoctorData',
            update: '/script/getDoctorData',
            destroy: '/script/getDoctorData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

