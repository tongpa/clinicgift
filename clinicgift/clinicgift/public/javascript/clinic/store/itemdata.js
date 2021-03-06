﻿Ext.define('clinic.store.ItemData',{
	extend : 'clinic.store.MasterStore',
	requires: 'clinic.model.Item',
	model : 'clinic.model.Item',
	alias: ['widget.itemData'],
	storeId : 'itemStore', 
	autoLoad : true,
	proxy : {
		 
		type: 'ajax',
		url : '/script/getItemData',    	
		api: {
            read: '/script/getItemData',
            create: '/script/getItemData',
            update: '/script/getItemData',
            destroy: '/script/getItemData'
        }, 
         
        writer: {
        	type: 'json' 
        } 
	}
});

