<?php
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Data.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Regimen.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Helpers/MailHelper.php';

	if( $_GET['action']  == 'setAllDataValues' ){
	    
	    require $_SERVER['DOCUMENT_ROOT'].'/Frensh/Models/Control.php';
	    
	    $regimen = new Regimen();
	    $data = new Data();
	    $control = new Control();
	    
	    $temp_max = $regimen->getValueById( 1 );
	    $temp_min = $regimen->getValueById( 4 );

	    $temp = $_GET['temperatura'];
	    $hum = $_GET['humedad'];
	    $lum = $_GET['lum'];
	    $ip = $_GET['ip'];

	    $data->setValue( 1, $temp );
	    $data->setValue( 2, $hum );
	    $data->setValue( 5, $lum );
	    $control->setValue( 6, $ip );

	    if( $temp >= $temp_max ){
	    	  $control->setValue( 3, "On" );
		  $control->setValue( 4, "true" );
		  $control->setValue( 1, "On" );
		  if( $control->getValueById( 5 ) == 'true' ){
		      MailHelper::sendMail( "El sistema tiene un problema con la Temperatura!!!\r\nTemperatura Max:".$temp_max." Grados\r\nTemperatura Actual:".$temp." Grados" );
		      $control->setValue( 5, "false" );
		  }		  
	    }else {
	    	  $control->setValue( 3, "Off" );
		  if( $control->getValueById( 4 ) == 'true' ){
		      $control->setValue( 1, "Off" );
		      $control->setValue( 4, "false" );
		      $control->setValue( 5, "true" );
		  }
	    }   

	    echo $control->getValueById( 1 );
	
	}else if( $_GET['action']  == 'getAll' ){
	    
	    $data = new Data();

            echo json_encode( $data->getAll() );
	}	
?>