Ext.define('clinic.panel.visit.ListPatientInServiceView',{
	extend: 'Ext.grid.Panel'
	,alias: 'widget.listpatientinserviceview'
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
	,initComponent: function () {
		var main = this;
		main.columns = [
		                	new Ext.grid.RowNumberer(),
		                	{ text: 'Name', dataIndex: 'patient_name',flex:2 },
		                	{ text: 'Time', dataIndex: 'start_date',flex:2 }
		                ];
		
		main.servicepointstore = new Ext.create('clinic.store.ServicePointData');
		
		main.store = new Ext.create('clinic.store.ServiceData');
		main.service = Ext.create('Ext.form.ComboBox',{anchor: '-5', allowBlank:false,name:'service',fieldLabel:'Service',
			store: main.servicepointstore,
		    queryMode: 'local',
		    displayField: 'description',
		    valueField: 'id',
		    blankText : 'Service'
			//emptyText: 'Service'
				});
		main.searchbt = Ext.create('Ext.Button', {
		    text: 'Search',
		    anchor: '100%',
		    
		    handler:function(bt,ev){main.searchdata(main)}
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
		        items:[main.service]
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
		this.fireEvent('showVisit', this,selections[0]);
        //this.down('#delete').setDisabled(selections.length === 0);
    
	},
	searchdata : function(cmp){
		this.store.load({
			params : {
				idsearch : cmp.service.getValue()
			},
			callback :  function(records, operation, success) {
		    	 
		    	
		    	if(success){
		    		
		    	}
		         
		    },
			 
			scope:this
		});
	}
});