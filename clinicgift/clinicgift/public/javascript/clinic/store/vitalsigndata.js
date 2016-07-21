Ext.define('clinic.store.VitalSignData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.VitalSign',
	model : 'clinic.model.VitalSign',
	alias: ['widget.vitalsignData'],
	storeId : 'vitalsignStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getVitalSignData',    	
		api: {
            read: '/script/getVitalSignData',
            create: '/script/getVitalSignData',
            update: '/script/getVitalSignData',
            destroy: '/script/getVitalSignData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

