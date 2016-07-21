Ext.define('clinic.model.Person',{
	extend: 'Ext.data.Model',
    idProperty: 'id_persion',    
    fields: [
             'id_person' , 'id_prefix' , 'firstname' ,
             'lastname' ,    'nickname' ,    'id_gender' ,    'birthdate' ,    'id_marriage' , 
             'id_nation'  ,    'id_race'  ,
             'id_religion' ,    'id_bloodgroup' ,    'bloodrh' ,    'drugalert' ,    'pid' ,    'email' 
            ] 
});
