Ext.define('clinic.store.BloodGroupData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.BloodGroupData'],
	storeId : 'bloodgroupStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getBloodGroupData',    	
		api: {
            read: '/script/getBloodGroupData',
            create: '/script/getBloodGroupData',
            update: '/script/getBloodGroupData',
            destroy: '/script/getBloodGroupData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

