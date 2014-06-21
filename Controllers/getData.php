<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Data.php';

	if( $_GET['action'] == 'getAll' ){
	        $data = new Data();

        	echo json_encode( $data->getAll() );
	}else if( $_GET['action'] == 'asdf'){

	}
?>
