<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Regimen.php';

        $regimen= new Regimen();

	if( $_GET['action'] == 'getAll' ){
        	echo json_encode( $regimen->getAll() );
	}
?>
