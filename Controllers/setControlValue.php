<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Control.php';

        $control = new Control();

        $id = $_GET['id'];
        $value = $_GET['value'];

        $control->setValue( $id, $value );

        echo json_encode( $control->getValueById( $id ) );
?>

