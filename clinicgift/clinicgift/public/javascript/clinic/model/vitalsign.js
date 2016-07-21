Ext.define('clinic.model.VitalSign',{
	extend: 'Ext.data.Model',
    idProperty: 'id_vitalsign',    
    fields: [
             'id_vitalsign' , 'id_visit' , 'weight' , 'pressure',
             'temperature' ,    'pulse' ,    'height' ,    'bmi' ,
             'cc','pmh','fh','hpi','pe','create_date'
            ] 
});
