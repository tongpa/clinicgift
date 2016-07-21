Ext.define('clinic.model.Service',{
	extend: 'Ext.data.Model',
    idProperty: 'id_service',    
    fields: [
             'id_service' , 'id_clinic' , 'doctor' ,
             'start_date' ,    'id_visit' ,    'id_person' ,    'id_doctor' ,
             'patient_name'
            ] 
});
