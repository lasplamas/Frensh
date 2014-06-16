<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Data.php';

        $data = new Data();

        echo json_encode( $data->getAll() );

?>
