Ext.define('clinic.panel.order.OrderView',{
	extend: 'Ext.form.Panel',
	alias: 'widget.personview',
	scrollable:true
	,bodyPadding: 5
	,defaults: {
   	    labelWidth: 120,
        anchor: '100%',
        layout: {   type: 'fix' }
        //msgTarget: 'side'
    },
	fieldDefaults: {
	    //labelAlign: 'right',
	    //labelWidth: 115,
		msgTarget: 'side'
	}
	,initComponent: function () {
		var main = this;
		
		main.prefixstore = Ext.create('clinic.store.PrefixData');
		main.prefixstore.load(); 

		main.genderstore = Ext.create('clinic.store.GenderData');
		main.genderstore.load();
		
		main.marriagestore = Ext.create('clinic.store.MarriageData');
		main.marriagestore.load();
		
		main.nationstore = Ext.create('clinic.store.NationData');
		main.nationstore.load();
		
		main.racestore = Ext.create('clinic.store.NationData');
		main.racestore.load();
		
		main.religionstore = Ext.create('clinic.store.ReligionData');
		main.religionstore.load();
		
		main.bloodgroupstore = Ext.create('clinic.store.BloodGroupData');
		main.bloodgroupstore.load();
		
		main.idperson = Ext.create('Ext.form.field.Hidden',{ name:'id_person'});
		main.prefix = Ext.create('Ext.form.ComboBox',{name:'id_prefix',fieldLabel:'prefix',
			allowBlank: false ,
			store: main.prefixstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Prefix'  
		    //emptyText : 'Prefix' 
		 });
		
		main.firstname = Ext.create('Ext.form.field.Text',{ allowBlank:false,name:'firstname',fieldLabel:'First Name',emptyText: 'First Name'});
		main.lastname = Ext.create('Ext.form.field.Text',{ allowBlank:false,name:'lastname',fieldLabel:'Last Name',emptyText: 'Last Name'});
		main.nickname = Ext.create('Ext.form.field.Text',{name:'nickname',fieldLabel:'Nick Name',emptyText: 'Nick Name'});
		main.gender = Ext.create('Ext.form.ComboBox',{name:'id_gender',fieldLabel:'Gender',
			allowBlank: false ,
			store: main.genderstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Gender'  
		    //emptyText: 'Gender'
		    	});
		main.birthdate = Ext.create('Ext.form.field.Date',{name:'birthdate',fieldLabel:'Birthdate',maxValue: new Date(),emptyText: 'Birthdate' });
		
		main.marriage = Ext.create('Ext.form.ComboBox',{name:'id_marriage',fieldLabel:'Marriage',
			store: main.marriagestore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Marriage'  
		    //emptyText: 'Marriage' 
		    	});
		main.nation = Ext.create('Ext.form.ComboBox',{name:'id_nation',fieldLabel:'Nation',
			store: main.nationstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Nation'  
		    //emptyText: 'Nation'
		    	});
		main.race = Ext.create('Ext.form.ComboBox',{name:'id_race',fieldLabel:'Race',

			store: main.racestore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Race'  
		    //emptyText: 'Race' 
		    	});
		main.religion = Ext.create('Ext.form.ComboBox',{name:'id_religion',fieldLabel:'Religion',
			store: main.religionstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Religion'  
		    //emptyText: 'Religion' 
		    	});
		
		main.bloodgroup = Ext.create('Ext.form.ComboBox',{name:'id_bloodgroup',fieldLabel:'bloodgroup',
			store: main.bloodgroupstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Blood Group'
		    //emptyText: 'Blood Group'
		    	});
		main.bloodrh = Ext.create('Ext.form.field.Text',{name:'bloodrh',fieldLabel:'bloodrh',maxValue: new Date(),emptyText: 'Blood RH' });
		main.drugalert = Ext.create('Ext.form.field.Text',{name:'drugalert',fieldLabel:'drugalert',maxValue: new Date(),emptyText: 'Drug Alert' });
		main.pid = Ext.create('Ext.form.field.Text',{name:'pid',fieldLabel:'pid',maxValue: new Date(),emptyText: 'PID' });
		main.email = Ext.create('Ext.form.field.Text',{name:'email',fieldLabel:'Email',maxValue: new Date(),emptyText: 'Email' });
		
		
		
		main.fieldset = Ext.create('Ext.form.FieldSet',{
			title: 'Person Information',
			defaults: {
				anchor: '100%'
			},
			items: [main.idperson,
	               	main.prefix,main.firstname ,main.lastname ,main.nickname ,main.gender ,main.birthdate
	               	,main.marriage,main.nation ,main.race ,main.religion 
	               	,main.bloodgroup ,main.bloodrh ,main.drugalert ,main.pid,main.email
		               
	               	]

			});
		
		main.btsave = Ext.create('Ext.Button',{		 
			text : 'Save',
			formBind: true,  
	        disabled: true,
			handler : function(bt,ev){
				var form = this.up('form').getForm();
				
	            if (form.isValid()) {
	            	
	                form.submit({
	                	url: '/person/save',
	                	scope: this,
	                	method: 'POST',
	                	 
	                	waitMsg: 'please wait' ,
	                    success: function(form, action) {
	                    	console.log(action);
	                    	if( action.result.success){
	                    		//debugger;
	                    		form.reset();
	                    		Ext.Msg.alert( survey.message.success , action.result.message);
		                    	
	                    	}
	                    	else{
	                    		//Ext.Msg.alert(survey.message.success, action.result.message);
	                    	}
	                    		
	                    	
	                    	//main.refreshOther();
	                    },
	                    failure: function(form, action) {
	                    	 
	                    	if (action.response.status = '404'){
	                    		
	                    		//Ext.Msg.alert(survey.message.failed, action.response.statusText);
	                    		//main.closeWindow(main,bt); 
	                    	}
	                    	else{
	                    		//Ext.Msg.alert(survey.message.success, action.result.message);
	                    	}
	                        
	                    }
	                });
	            }

			}
		});
		
		main.items = [main.fieldset];
		main.buttons = [ main.btsave];
		main.dockedItems= [{
		    xtype: 'toolbar',
		    dock: 'top',
		    items: [
		            { xtype: 'button', text: 'New Person' },
		            { xtype: 'button', text: 'Search Person',handler: main.createSearch },
		            { xtype: 'button', text: 'Visit',handler: main.visitPerson },
		    ]
		}];
		main.callParent();
	},
	saveperson : function (bt,ev){
		
	},
	createSearch : function (bt,ev){
		var showdata = Ext.create('clinic.panel.person.ResultSearchPersonView',{
			
			listeners : {
				showPerson : function(cmp,record) {
					console.log('showPerson');
					console.log(record);
					bt.ownerCt.ownerCt.getForm().loadRecord(record);
    		
					//debugger;
					//desktop.app.getModule('visit-win').createWindow().show();
					
		        }
			}
		});
		
		Ext.create('Ext.Window', {
	        title: 'Search Person',
	        width: 600,
	        height: 400,
	        animCollapse:false,
            constrainHeader:true,
            
	        plain: true,
	        //headerPosition: 'left',
	        layout: 'fit',
	        items: [showdata]
	    }).show();

		
	},
	visitPerson : function(bt,ev){
		//console.log("call visit");
		
		
		if (this.ownerCt.ownerCt.idperson.getValue().length >0){ 
		
			this.ownerCt.ownerCt.fireEvent('callVisit', this, this.ownerCt.ownerCt.getRecord());
		}
		else{
			Ext.Msg.alert('Alert', 'Please Select Person');
		}
		//debugger;
	}
});