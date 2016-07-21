Ext.define('clinic.model.FixData',{
	extend: 'Ext.data.Model',
    idProperty: 'id',    
    fields: [
             {name: 'id', type: 'string'},
             {name: 'description',  type: 'string'}
            ] 
});
