Ext.define('clinic.store.MarriageData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',
	model : 'clinic.model.FixData',
	alias: ['widget.marriageData'],
	storeId : 'marriageStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getMarriageData',    	
		api: {
            read: '/script/getMarriageData',
            create: '/script/getMarriageData',
            update: '/script/getMarriageData',
            destroy: '/script/getMarriagDeata'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

