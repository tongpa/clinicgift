Ext.define('clinic.store.NationData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.nationData'],
	storeId : 'nationStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getNationData',    	
		api: {
            read: '/script/getNationData',
            create: '/script/getNationData',
            update: '/script/getNationData',
            destroy: '/script/getNationData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

