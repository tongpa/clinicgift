Ext.define('clinic.panel.order.ListSearchItemView',{
	extend: 'Ext.grid.Panel'
	,alias: 'widget.listsearchitemview'
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
		                	{ text: 'Name', dataIndex: 'itemname',flex:2 }
		                ];
		
		 
		
		main.store = Ext.create('clinic.store.ItemData');
		main.textsearch = Ext.create('Ext.form.field.Text',{anchor: '100%', name:'searchItem',hideLabel : true,emptyText: 'Search Item'});
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
		        items:[main.textsearch]
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
		 
		this.fireEvent('showVisit', this,selections[0]);
     
    
	},
	searchdata : function(cmp){
		console.log('search patient in service');
		this.getSelectionModel().clearSelections();
		 
		this.store.load({
			params : {
				idsearch : cmp.textsearch.getValue()
			},
			callback :  function(records, operation, success) {
		    	 
		    	
		    	if(success){
		    		
		    	}
		         
		    },
			 
			scope:this
		});
	}
});