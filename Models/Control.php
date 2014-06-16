<?php
	//require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';

	class Control {

                //Global attributes
                public $controlid;
                public $description;
                public $value;

                function __construct(){
                        $controlid = "";
                        $description = "";
                        $value = "";
                }//End of constructor

                function getByID( $id ){

                }//End of getByID Method

		function getValueById( $id ){
			$conn = connection();

			$controls = mysqli_query( $conn, "SELECT * FROM Control where controlid=".$id );

			$control = new Control();

			while( $c = mysqli_fetch_array( $controls ) ){
				$control->controlid = $c['controlid'];
				$control->description = $c['description'];
				$control->value = $c['value'];
			}

			close( $conn );
			return $control->value;
		}//End of getValueById Mehtod

		function setValue( $id, $value ){
			$conn = connection();
                        $query = "UPDATE Control SET value='".$value."' WHERE controlid=".$id;
                        mysqli_query( $conn, $query );
                        close( $conn );

		}//End fo setValueById

	}//End of Control model
?>
