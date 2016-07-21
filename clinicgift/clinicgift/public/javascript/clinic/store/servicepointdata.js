Ext.define('clinic.store.ServicePointData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.servicePointData'],
	storeId : 'servicePointStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getServicePointData',    	
		api: {
            read: '/script/getServicePointData',
            create: '/script/getServicePointData',
            update: '/script/getServicePointData',
            destroy: '/script/getServicePointData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

