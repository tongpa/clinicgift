Ext.define('clinic.store.ReligionData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.religionData'],
	storeId : 'religionStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getReligionData',    	
		api: {
            read: '/script/getReligionData',
            create: '/script/getReligionData',
            update: '/script/getReligionData',
            destroy: '/script/getReligionData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

