Ext.define('clinic.panel.vitalsign.ListVitalSignView',{
	extend: 'Ext.grid.Panel'
	,alias: 'widget.listvitalsignview'
		,animCollapse:false
	    ,constrainHeader:true
	    //,scrollable:true
		,border: false
		,requires: [
		           'Ext.data.ArrayStore',
		           'Ext.util.Format',
		           'Ext.grid.Panel',
		           'Ext.grid.RowNumberer'
		       ]
	, initData : function(record){
		this.searchdata(record.data.id_visit);
		this.idvisit.setValue(record.data.id_visit);
	}
		,initComponent: function () {
			var main = this;
			main.columns = [
			                	new Ext.grid.RowNumberer(),
			                	{ text: 'Time', dataIndex: 'create_date',flex:1 }
			                ];
			
			main.store = new Ext.create('clinic.store.VitalSignData'); 
			main.idvisit = Ext.create('Ext.form.field.Hidden',{ name:'id_visit'});
			main.service = Ext.create('Ext.form.ComboBox',{anchor: '-5', allowBlank:false,name:'service',fieldLabel:'Service',emptyText: 'Service'});
			main.searchbt = Ext.create('Ext.Button', {
			    text: 'Search',
			    anchor: '100%',
			    handler: function(bt,ev){
			    	main.searchdata(main.idvisit.getValue());
			    }
			});
			
			main.dockedItems= [{
			    xtype: 'toolbar',
			    dock: 'top',
			    layout: {
			        type: 'hbox',
			        align: 'stretch'
			    },defaults: {
			        border: false,
			        xtype: 'panel',		       
			        layout: 'anchor'
			    },
			    items: [{
			        flex: 2,
			        items:[main.idvisit]
			    },
			    {
			        items:[main.searchbt]
			    }
			    ]
			}];

			main.callParent();
			main.getSelectionModel().on('selectionchange', main.onSelectChange, main);
		},
		onSelectChange: function(selModel, selections){
			//debugger;
			this.fireEvent('showVitalSign', this,selections[0]);
	        //this.down('#delete').setDisabled(selections.length === 0);
	    
		},
		searchdata(idserch){
			this.store.load({
				params : {
					idsearch : idserch
				},
				callback :  function(records, operation, success) {
			    	 
			    	
			    	if(success){
			    		
			    	}
			         
			    },
				 
				scope:this
			});
		
		}
	});