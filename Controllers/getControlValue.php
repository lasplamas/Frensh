<?php
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Control.php';

	$id = $_GET['id'];

        $control = new Control();

        echo json_encode( $control->getValueById( $id ) );
?>



