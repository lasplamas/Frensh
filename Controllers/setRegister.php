<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Register.php';

        $register = new Register();

	$register->dataid = 1;
	$register->date = date('d').'/'.date('m').'/'.date('Y');
        $register->time = date( 'h:i:s A' );
	$register->value = $_GET['temperatura'];

	$register->addRegister( $register );

/**************************************************************************/

	$register = new Register();

        $register->dataid = 2;
        $register->date = date('d').'/'.date('m').'/'.date('Y');
        $register->time = date( 'h:i:s A' );
        $register->value = $_GET['humedad'];

	$register->addRegister( $register );

/**************************************************************************/

	$register = new Register();

        $register->dataid = 5;
        $register->date = date('d').'/'.date('m').'/'.date('Y');
        $register->time = date( 'h:i:s A' );
        $register->value = $_GET['lum'];

        $register->addRegister( $register );

?>
