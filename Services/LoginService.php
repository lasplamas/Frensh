<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Controllers/LoginController.php';

	if( $_POST['action'] == 'validateUser' ){
	    
	    $username = $_POST['username'];
	    $password = $_POST['password'];

	    if( LoginController::validate_user( $username, $password ) ){
	    	session_start();
		$_SESSION['username'] = $username;
		session_write_close();
		echo json_encode( "LoginSuccessful" );
	    }else{
		echo json_encode( "LoginWrong" );
	    }

	}
?>