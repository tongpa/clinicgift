Ext.namespace("clinic");

Ext.define('clinic.model.FixData',{
	extend: 'Ext.data.Model',
    idProperty: 'id',    
    fields: ['id',   'description' ] 
});

Ext.define('clinic.store.PrefixData',{
	extend : 'Ext.data.Store',
	requires: 'clinic.model.fixdata',    
    
	alias: ['widget.prefixData'],
	model : 'clinic.model.fixdata',
	storeId : 'prefixStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getPrefixData',    	
		api: {
            read: '/script/getPrefixData',
            create: '/script/getPrefixData',
            update: '/script/getPrefixData',
            destroy: '/script/getPrefixData'
        }, 
        reader:{
        	type: 'json',
    		rootProperty : 'clinic',
    		totalProperty : 'total'
    	}  , 
        writer: {
        	type: 'json' 
        	 
           // writeAllFields: false ,
           // allowSingle :false 
             
        } 
	}
});

