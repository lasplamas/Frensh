<?php
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Regimen.php';

        $regimen= new Regimen();

        if( $_POST['action'] == 'setValue' ){
                $regimen->setValueByDescription( $_POST['des'] , $_POST['value'] );
		echo "success";
	}
?>

