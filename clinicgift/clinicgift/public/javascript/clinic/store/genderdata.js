Ext.define('clinic.store.GenderData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',    
	model : 'clinic.model.FixData',
	alias: ['widget.genderData'],
	storeId : 'genderStore', 
	proxy : {
		type: 'ajax',
		url : '/script/getGenderData',    	
		api: {
            read: '/script/getGenderData',
            create: '/script/getGenderData',
            update: '/script/getGenderData',
            destroy: '/script/getGenderData'
        }, 
        writer: {
        	type: 'json' 
        	 
           // writeAllFields: false ,
           // allowSingle :false 
             
        } 
	}
});

