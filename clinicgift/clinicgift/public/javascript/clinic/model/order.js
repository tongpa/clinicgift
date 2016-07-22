Ext.define('clinic.model.Order',{
	extend: 'Ext.data.Model',
    idProperty: 'id_order',    
    fields: [
             'id_order',
             'id_visit',
             'id_item',
             'quantity',
             'price',
             'total',
             'order_date',
             'id_staff'
             

            ] 
});
