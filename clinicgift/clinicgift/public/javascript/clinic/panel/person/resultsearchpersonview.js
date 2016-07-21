Ext.define('clinic.panel.person.ResultSearchPersonView',{
	extend: 'Ext.grid.Panel'
	,alias: 'widget.resultsearchpersonview'
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
		                	{ text: 'Name', dataIndex: 'firstname',flex:2 },
		                	{ text: 'Name', dataIndex: 'lastname',flex:2 },
		                	{ text: 'PID', dataIndex: 'pid',flex:1 }
		                ];
		
		main.store = new Ext.create('clinic.store.PersonData');
		/*main.store = new Ext.data.ArrayStore({
            fields: [
                     { name: 'name' },
                     { name: 'pid' }
                  ],
                  data: clinic.panel.person.ResultSearchPersonView.getDummyData()
              });*/
		main.search = Ext.create('Ext.form.field.Text',{anchor: '-5', allowBlank:false,name:'search',fieldLabel:'Search',emptyText: 'Search'});
		main.searchbt = Ext.create('Ext.Button', {
		    text: 'Search',
		    anchor: '100%',
		    store: main.store,
		    handler: main.searchdata
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
		        items:[main.search]
		    },
		    {
		        items:[main.searchbt]
		    }
		    ]
		}];

		main.callParent();
		main.getSelectionModel().on('selectionchange', main.onSelectChange, main);
	},
	searchdata : function(bt,ev){
		this.store.load();
	},
	onSelectChange: function(selModel, selections){
		//debugger;
		this.fireEvent('showPerson', this,selections[0]);
        //this.down('#delete').setDisabled(selections.length === 0);
    
	}
});