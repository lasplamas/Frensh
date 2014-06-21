<?php
	
	/***
	* mailHelper class
	* helper for managing mail messages
	*****************************************/
	class MailHelper{
	      
	      /***
	      * sendMail
	      * function for sending a mail to alert
	      **********************************/
	      public static function sendMail( $data ){
	      	     	$control = new Control();

			$mensaje = $data;
	   		$mensaje = wordwrap($mensaje, 70, "\r\n");

			$mail = $control->getValueById( 7 );

			mail( $mail , 'Alerta de Temperatura', $mensaje);

	      }//End of sendMail function

	}//End of MailHelper
?>