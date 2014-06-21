<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Data.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Control.php';

	$data = new Data();
	$control = new Control();

	$temp = $_GET['temperatura'];
	$hum = $_GET['humedad'];
	$lum = $_GET['lum'];
	$estado_bot = $_GET['bot'];

	$data->setValue( 1, $temp );
	$data->setValue( 2, $hum );
	$data->setValue( 5, $lum );
	
	//if( $control->getValueById( 1 ) != $estado_bot ){
	  //  $control->setValue( 1, $estado_bot );   
	//}
	echo $control->getValueById( 1 );
?>
