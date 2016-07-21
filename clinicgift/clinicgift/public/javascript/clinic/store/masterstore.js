Ext.define('clinic.store.MasterStore',{
	extend : 'Ext.data.Store',
	alias: ['widget.MasterStore'],
	autoLoad : false,
	autoSync : false,
	pageSize: 50,
	proxy : {
		reader:{
        	type: 'json',
    		rootProperty : 'clinic',
    		totalProperty : 'total'
    	}  ,
		listeners: {
            exception: function(proxy, response, operation){
            	//debugger;
               /* Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
                */
                
            	Ext.MessageBox.alert('Time out','Session Time out', function(){
            		window.location = "/login";
            		
            	});
            	 
                
            } 
        }
	}
});
