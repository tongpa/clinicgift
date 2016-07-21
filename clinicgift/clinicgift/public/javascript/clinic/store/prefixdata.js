Ext.namespace("clinic");
/*listProject = Ext.create('Ext.data.Store', {

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
*/
Ext.define('FixData',{
	extend: 'Ext.data.Model',
    idProperty: 'id',    
    fields: [
             {name: 'id', type: 'string'},
             {name: 'description',  type: 'string'}
            ] 
});


Ext.define('clinic.store.PrefixData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.FixData',    
    
	alias: ['widget.prefixData'],
	model : 'clinic.model.FixData',
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

