Ext.define('clinic.store.PersonData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.Person',
	model : 'clinic.model.Person',
	alias: ['widget.personData'],
	storeId : 'PersonStore', 
	autoLoad : false,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getPersonData',    	
		api: {
            read: '/script/getPersonData',
            create: '/script/getPersonData',
            update: '/script/getPersonData',
            destroy: '/script/getPersonData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

