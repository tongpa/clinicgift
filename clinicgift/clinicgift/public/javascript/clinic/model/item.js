Ext.define('clinic.model.Item',{
	extend: 'Ext.data.Model',
    idProperty: 'id_item',    
    fields: [
             'itemname',
             'nickname',
             'genericname',
             'id_item_type',
             'price',
             'unit'
            ] 
});

