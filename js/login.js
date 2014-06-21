$(document).on( "ready", onReady );

/***
* onReady
* function that has all the on beginning scriptiong
****************************/
function onReady(){
    $('#bLogin').click( bLogin_action );
}//End of ready function

function bLogin_action(){
    var username = $('#txtUsername').val();
    var password = $('#txtPassword').val();
    
    $.ajax({
	'dataType' : 'json',
	'type' : 'POST',
	'url' : '../Services/LoginService.php',
	'data' : { 'action' : 'validateUser', 'username': username , 'password' : password  },
	success : function( data ){
	    if( data == "LoginSuccessful" ){
		window.location.href = '../';
	    }else {
		alert("Usuario o Contraseña incorrecta");
	    }
	}//End of success function
    });//End of ajax function
}//End of bLogin_action
