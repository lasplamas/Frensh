//Global Variables
var value=true;

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
		});
	}//End of for

	/***
	* Init active button
	*****************************/
	$('#bEstadoGeneral').attr('class', 'active');
	$('#estadoGeneral').show();
	$('#estadoHistorico').hide();
	$('#programarRegimen').hide();
	
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

});//End of ready function

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
		'type' : 'POST',
		'url' : '../Frensh/Controllers/setRegimen.php',
		'data' : { 'action':'setValue', 'des': ''+des, 'value': ''+value },
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
		'url' :  '../Frensh/Controllers/getRegimen.php',
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
                'type' : 'POST',
                'url' : '../Frensh/Controllers/getData.php',
                'data' : { 'action' : 'getAll' },
                'success' : function( data ){

                        $("#lTemp").empty();
                        $("#lTemp").append(data['0']['value']+"&deg;");

                        $("#lHum").empty();
                        $("#lHum").append(data['1']['value']+"&#37;");

                        $("#lLuz").empty();
                        $("#lLuz").append(data['2']['value']+"lux");

                }
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
                'url': '../Frensh/Controllers/getControlValue.php',
                'data': { 'id' : '1' },
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
                }
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
        
	$('#estadoGeneral').show();
        $('#estadoHistorico').hide();
        $('#programarRegimen').hide();
}//End of bEstadoGeneral_action Function

/***
* bEstadoGeneral_action
* Function for bEstadoHistorico Actions
********************************/
function bEstadoHistorico_action(){
	$('#bEstadoGeneral').attr('class', '');
        $('#bEstadoHistorico').attr('class', 'active');
        $('#bProgramarRegimen').attr('class', '');

        $('#estadoGeneral').hide();
        $('#estadoHistorico').show();
        $('#programarRegimen').hide();
}//End of bEstadoHistorico_action Function

/***
* bEstadoGeneral_action
* Function for bProgramarRegimen Actions
********************************/
function bProgramarRegimen_action(){
	
	$('#bEstadoGeneral').attr('class', '');
        $('#bEstadoHistorico').attr('class', '');
        $('#bProgramarRegimen').attr('class', 'active');

        $('#estadoGeneral').hide();
        $('#estadoHistorico').hide();
        $('#programarRegimen').show();

}//End of bProgramarRegimen_action Function

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
		'url': '../Frensh/Controllers/setControlValue.php',
		'data': { 'id' : '1' , 'value': val },
		'success': function( data ){
			console.log( data );
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
