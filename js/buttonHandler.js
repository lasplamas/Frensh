//Global Variables
var value=true;
var real_values = new Array();
var alerts = new Array();
var automatic;
var correo_disabled = true;
/***
* Every time!
***************/
$(function() {
    	startRefresh();
});//End of always function

/***
* startRefresh
* Function that actualizes with delay the actual values of the db
*************************/
function startRefresh() {
    	setTimeout(startRefresh,1000);
	act_actual_values();
        validate_max_min();
        validate_alerts();
        set_automatic();
        act_act_button();
        estado();
}//End of startRefresh function

/****
* When ready!!
******************************/
$(document).ready( function(){
	
        /***
	* Fill inputs with regimen values
	***********************************************/
	fill_regimen();

        /***
	* Fill input with mail 
	***********************************************/
	fill_correo();
	
	/***
	* for for giving actions to buttons and disable inputs
	***************************/
	for( var j = 0; j < 3; j++){
		$("#row"+j).children("div").children("input").prop( "disabled", true );
		$("#row"+j).children("div").children("#save"+j).prop( "disabled", true );

		$("#row"+j).children("div").children("#save"+j).click( function(){
			var max = $(this).parent().parent().children("div").children("input")[0];			
			var min = $(this).parent().parent().children("div").children("input")[1];			
			
		 	var val_max = $( "#" + max.id ).val();
			var val_min = $( "#" + min.id ).val();
			if( $.isNumeric( val_max ) && $.isNumeric( val_min ) ){
			    if( parseInt( val_max ) > parseInt( val_min ) ){

				var name = $(this).parent().parent()[0];
			
				if( name.id == "row0" ){
				    setRegimen( "temp_max", val_max );
				    setRegimen( "temp_min", val_min );
				    $("#edit0").text( "Editar" );
				    $("#edit0").attr( "class", "btn btn-lg btn-info" );
				}else if( name.id == "row1" ){
				    setRegimen( "hum_max", val_max );
				    setRegimen( "hum_min", val_min );
				    $("#edit1").text( "Editar" );
                                    $("#edit1").attr( "class", "btn btn-lg btn-info" );
				}else if( name.id == "row2" ){
				    setRegimen( "lux_max", val_max );
				    setRegimen( "lux_min", val_min );
				    $("#edit2").text( "Editar" );
                                    $("#edit2").attr( "class", "btn btn-lg btn-info" );
				}
				$(this).prop( "disabled", true );
				$(this).parent().parent().children("div").children("input").prop( "disabled", true );			

			    }else{
				alert( "Error: El valor maximo no puede ser menor que el minimo!!!" );
			    }

			 } else {
			     alert( "Error: Los valores no son numéricos!!!" );
			 }
		});//End of click function

		$("#row"+j).children("div").children("#edit"+j).click( function(){
			
			if( $(this).parent().parent().children("div").children("input").prop("disabled") ){
				$(this).parent().parent().children("div").children("input").prop("disabled", false);
				$(this).parent().parent().children("div").children("button").prop("disabled", false);
				$(this).text( "Cancelar" );
                       	 	$(this).attr( "class", "btn btn-lg btn-danger" );
                        	$(this).prop( "disabled", false );
			} else {
				$(this).parent().parent().children("div").children("input").prop("disabled", true);
				$(this).parent().parent().children("div").children("button").prop("disabled", true);
				$(this).text( "Editar" );
                        	$(this).attr( "class", "btn btn-lg btn-info" );
                        	$(this).prop( "disabled", false );
			}

		});//End of another click function

	}//End of for

	/***
	* Init active button
	*****************************/
	$('#bEstadoGeneral').attr('class', 'active');
	$('#estadoGeneral').show();
	$('#estadoHistorico').hide();
	$('#programarRegimen').hide();
	$('#preferencias').hide();
	
	/***
	* ajax function for knowing the real value of the activation button
	*******************************************************************/
	act_act_button();
	
	/****
	* ajax function for gettig actual values of data from the database
	*****************************************************************/
	act_actual_values();

	/***
	* bActivar click action
	**********************************************/
	$('#bActivar').click( function(){ bActivar_action(); } );

	/***
	* bEstadoGeneral click action
	************************************************/
	$('#bEstadoGeneral').click( function(){ bEstadoGeneral_action(); } );

	/***
        * bEstadoHistorico click action
        ************************************************/
	$('#bEstadoHistorico').click( function(){ bEstadoHistorico_action(); } );

	/***
        * bProgramarRegimen click action
        ************************************************/
	$('#bProgramarRegimen').click( function(){ bProgramarRegimen_action(); } );

        /***
        * bProgramarRegimen click action
        ************************************************/
	$('#bPreferencias').click( function(){ bPreferencias_action(); } );

        /***
        * editarCorreo click action
        ************************************************/
	$('#editCorreo').click( function(){ editarCorreo_action(); } );

        /***
        * saveCorreo click action
        ************************************************/
	$('#saveCorreo').click( function(){ saveCorreo_action(); } );

});//End of ready function

function estado(){
    if( automatic ){
	$( '#estadoVentiladores' ).text( 'Automatico' );
    }else if( value ){
	$( '#estadoVentiladores' ).text( 'Prendidos' );
    }else {
	$( '#estadoVentiladores' ).text( 'Apagados' );	
    }
}//End of estado Function

/***
* fill_correo
* function that fills the mail field with the one on the database
********************************/
function fill_correo(){
    $.ajax({
	'dataType' : 'json',
	'type' : 'GET',
	'url' : '/Frensh/Controllers/ControlController.php',
	'data' : { 'action' : 'getValueById', 'id' : 7 },
	'success' : function(data){
	    $( '#txtCorreo' ).val( data );
	}
    });
    $('#saveCorreo').prop( 'disabled', true );
    $('#txtCorreo').prop( 'disabled', true );
}//End of fill_correo function

/***
* editar_correo_action
* Actions for the mail button
******************************/
function editarCorreo_action(){
    
    correo_disabled = !correo_disabled;
    $('#saveCorreo').prop( 'disabled', correo_disabled );
    $('#txtCorreo').prop( 'disabled', correo_disabled );
    
    if(!correo_disabled){
	$('#editCorreo').attr( "class" , "btn btn-lg btn-danger");
    }else {
	$('#editCorreo').attr( "class" , "btn btn-lg btn-info");
    }
}//End of editarCorreo_action

function saveCorreo_action(){
     var txtCorreo = $('#txtCorreo').val();
     $.ajax({
	'dataType' : 'json',
	'type' : 'GET',
	'url' : '/Frensh/Controllers/ControlController.php',
	'data' : { 'action' : 'setControlValue', 'id' : 7, 'value' : txtCorreo },
	'success' : function(data){
	        editarCorreo_action();
	        $('#saveCorreo').prop( 'disabled', true );
	        $('#txtCorreo').prop( 'disabled', true );
	}
    });
}
/***
* validate_alerts
* Function to validate the content of the alerts.
* @params none
* @return none
*******************************/
function validate_alerts(){
       for( var i = 0; i < 3; i++ ){
	    if( alert[i] == 'alta' ) {
		$(".column" + (i+1) ).children("div").attr( "class" , "alert alert-danger");
	    }else if( alert[i] == 'baja' ) {
		$(".column" + (i+1) ).children("div").attr( "class", "alert alert-info");
	    }else {
		$(".column" + (i+1) ).children("div").attr( "class" , "alert alert-success");
	    }
       }//End of filling real values to a global array
}//End of validate_alerts function

/***
* validate_max_min
* Function that checks that all the values are between the maxs and the mins
* @param none
* @return none
************************************/
function validate_max_min(){
       for( var i = 0; i < 3; i++ ){
	   if( real_values[i] >= parseInt( $("#max"+i).val() ) ){
	       alert[i] = "alta";
	   }else if( real_values[i] <= parseInt( $("#min"+i).val() ) ){
	       alert[i] = "baja";
	   }else {
	       alert[i] = "normal";
	   }
       }//End of filling real values to a global array
}//End of the validate_max_min function

/***
* setRegimen
* Change the regimen values of the db
* @param des - description
* @param value - value
* @return none
*********************************/
function setRegimen( des, value ){

	$.ajax({
		'dataType' : 'json',
		'type' : 'GET',
		'url' : '../Frensh/Controllers/RegimenController.php',
		'data' : { 'action':'setValueByDescription', 'des': ''+des, 'value': ''+value },
		'success' : function( data ){
			if( data == 'success' ){
				alert( "Regimen Guardado!" );
			}else {
				alert( "Hubo un error al guardar" );
			}
		}
	});//End of ajax function

}//End of setRegimen function

/***
* fill_regimen
* Fill all the input 
*****************************/
function fill_regimen(){
	
	$.ajax({
		'dataType' : 'json',
		'type' : 'GET',
		'url' :  '../Frensh/Controllers/RegimenController.php',
		'data' : { 'action' : 'getAll' },
		'success' : function( data ){
			for( var i = 0; i < 3 ; i++ ){
				$( '#max'+i ).val(data[i]['value']);
			}

			for( var j = 0; j < 3 ; j++ ){
				$( '#min'+j ).val(data[j+3]['value']);
			}
		}
	});//End of ajax function

}//End of fill_regimen function

/***
* act_actual_values()
* actualize actual values of the database
*****************************************/
function act_actual_values(){
	/****
        * ajax function for gettig actual values of data from the database
        *****************************************************************/
        $.ajax( {
                'dataType' : 'json',
                'type' : 'GET',
                'url' : '../Frensh/Controllers/DataController.php',
                'data' : { 'action' : 'getAll' },
                'success' : function( data ){

                        $("#lTemp").empty();
                        $("#lTemp").append(data['0']['value']+"&deg;");
		        
                        $("#lHum").empty();
                        $("#lHum").append(data['1']['value']+"&#37;");

                        $("#lLuz").empty();
                        $("#lLuz").append(data['2']['value']+"lux");

		        for( var i = 0; i < 3; i++ ){
			    real_values[i] = parseInt( data[i]['value'] );
			}//End of filling real values to a global array
                
		}//End of success function
        });//End of ajax function
}//End of act_actual_values function

/***
* act_act_button()
* actualizing the button value with ajax
****************************************/
function act_act_button(){
	/***
        * ajax function for knowing the real value of the activation button
        *******************************************************************/
        $.ajax( {
                'dataType': 'json',
                'type': 'GET',
                'url': '../Frensh/Controllers/ControlController.php',
                'data': { 'action' : 'getValueById', 'id' : '1' },
                'success': function( data ){
                        if( data == 'On'){
                                value = true;
                                $('#bActivar').val("Apagar");
                                $('#bActivar').attr('class', 'btn btn-lg btn-danger');
                        }else{
                                value = false;
                                $('#bActivar').val("Prender");
                                $('#bActivar').attr('class', 'btn btn-lg btn-success');
                        }
                }//End of success function
        });//End of ajax funtion
}//End of ajax function

/***
* bEstadoGeneral_action
* Function for bEstadoGeneral Actions
********************************/
function bEstadoGeneral_action(){
	$('#bEstadoGeneral').attr('class', 'active');
	$('#bEstadoHistorico').attr('class', '');
	$('#bProgramarRegimen').attr('class', '');
        $('#bPreferencias').attr('class', '');

	$('#estadoGeneral').show();
        $('#estadoHistorico').hide();
        $('#programarRegimen').hide();
        $('#preferencias').hide();
}//End of bEstadoGeneral_action Function

/***
* bEstadoGeneral_action
* Function for bEstadoHistorico Actions
********************************/
function bEstadoHistorico_action(){
	$('#bEstadoGeneral').attr('class', '');
        $('#bEstadoHistorico').attr('class', 'active');
        $('#bProgramarRegimen').attr('class', '');
        $('#bPreferencias').attr('class', '');

        $('#estadoGeneral').hide();
        $('#estadoHistorico').show();
        $('#programarRegimen').hide();
        $('#preferencias').hide();
}//End of bEstadoHistorico_action Function

/***
* bProgramarRegimen_action
* Function for bProgramarRegimen Actions
********************************/
function bProgramarRegimen_action(){
	
	$('#bEstadoGeneral').attr('class', '');
        $('#bEstadoHistorico').attr('class', '');
        $('#bProgramarRegimen').attr('class', 'active');
        $('#bPreferencias').attr('class', '');

        $('#estadoGeneral').hide();
        $('#estadoHistorico').hide();
        $('#programarRegimen').show();
        $('#preferencias').hide();

}//End of bProgramarRegimen_action Function

/***
* bPreferencias_action
* Function for bPreferencias Actions
********************************/
function bPreferencias_action(){
	
	$('#bEstadoGeneral').attr('class', '');
        $('#bEstadoHistorico').attr('class', '');
        $('#bProgramarRegimen').attr('class', '');
        $('#bPreferencias').attr('class', 'active');

        $('#estadoGeneral').hide();
        $('#estadoHistorico').hide();
        $('#programarRegimen').hide();
        $('#preferencias').show();
}//End of bPreferencias_action Function

/***
* Turn 
* Method for toggle value of ventilation
****************************************/
function bActivar_action(){
	var val;

	if( value == true ){
		val = 'Off';
		value = false;
	}else{
		val = 'On';
		value = true;
	}

	$.ajax( {
		'dataType': 'json',
		'type': 'GET',
		'url': '../Frensh/Controllers/ControlController.php',
		'data': { 'action' : 'setControlValue' , 'id' : '1' , 'value': val },
		'success': function( data ){
			if( data == "On" ){
				$('#bActivar').val("Apagar");
				$('#bActivar').attr('class', 'btn btn-lg btn-danger');
			}else if( data == "Off" ){
				$('#bActivar').val("Prender");
				$('#bActivar').attr('class', 'btn btn-lg btn-success');				
			}
		}	
	});
}//End of Turn Function



/***
* set_automatic
* function that puts the system on automatic mode
*****************************/
function set_automatic(){
    /***
        * ajax function for knowing the real value of the activation button
        *******************************************************************/
        $.ajax( {
                'dataType': 'json',
                'type': 'GET',
                'url': '../Frensh/Controllers/ControlController.php',
                'data': { 'action' : 'getValueById', 'id' : '3' },
                'success': function( data ){
                        if( data == 'On'){
                                automatic = true;
			        $("#bActivar").prop( "disabled", true );
                        }else{
                                automatic = false;
			        $("#bActivar").prop( "disabled", false );
                        }
                }//End of success function
        });//End of ajax funtion
}//End of set_automatic
