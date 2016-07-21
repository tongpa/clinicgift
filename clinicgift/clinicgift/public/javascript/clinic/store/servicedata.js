Ext.define('clinic.store.ServiceData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.Service',
	model : 'clinic.model.Service',
	alias: ['widget.serviceData'],
	storeId : 'serviceStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getServiceData',    	
		api: {
            read: '/script/getServiceData',
            create: '/script/getServiceData',
            update: '/script/getServiceData',
            destroy: '/script/getServiceData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

