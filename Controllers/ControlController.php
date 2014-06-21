<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Control.php';

	if( $_GET['action'] == 'getValueById' ){
	    
	    $id = $_GET['id'];

            $control = new Control();

            echo json_encode( $control->getValueById( $id ) );
	
	} else if( $_GET['action'] == 'setControlValue' ){
	       
	       $control = new Control();

               $id = $_GET['id'];
               $value = $_GET['value'];

               $control->setValue( $id, $value );

               echo json_encode( $control->getValueById( $id ) );

	}
?>