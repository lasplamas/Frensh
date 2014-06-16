<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Data.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Control.php';

	$data = new Data();
	$control = new Control();

	$temp = $_GET['temperatura'];
	$hum = $_GET['humedad'];
	$lum = $_GET['lum'];

	$data->setValue( 1, $temp );
	$data->setValue( 2, $hum );
	$data->setValue( 5, $lum );

	echo $control->getValueById( 1 );
?>
