<?php
	//require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';

	class Register {

		//Global attributes
		public $dataid;
		public $date;
		public $time;
		public $value;

		function __construct(){
			$dataid = "";
			$date = date('d').date('m').date('Y');
			$time = date('h:i:s A');
			$value = "";
		}//End of constructor

		function getAll( ){
			$conn = connection();

			$register = mysqli_query( $conn, "SELECT * FROM Register" );
			$register_array = array();

			while( $r = mysqli_fetch_array( $register ) ){

				$temp_register = new Register();
				$temp_register->dataid = $r['dataid'];
				$temp_register->date = $r['date'];
				$temp_register->time = $r['time'];
				$temp_register->value = $r['value'];

				array_push( $register_array, $temp_register );

			}
			close( $conn );
			return $register_array;
		}//End of getAll Method

		function getByDataId( $di ){
			$conn = connection();

                        $register = mysqli_query( $conn, "SELECT * FROM Register WHERE dataid=".$di );
                        $register_array = array();

                        while( $r = mysqli_fetch_array( $register ) ){

                                $temp_register = new Register();
                                $temp_register->dataid = $r['dataid'];
                                $temp_register->date = $r['date'];
                                $temp_register->time = $r['time'];
                                $temp_register->value = $r['value'];

                                array_push( $register_array, $temp_register );

                        }
                        close( $conn );
                        return $register_array;

		}//End of getByDes Method

		function addRegister( $reg ){
			$conn = connection( );
			$values = "VALUES (".$reg->dataid.",'".$reg->date."','".$reg->time."','".$reg->value."')";
			$query = "INSERT INTO Register ( dataid, date, time, value ) ".$values;

			mysqli_query( $conn, $query );

			close( $conn );
		}//End of add Function

	}//End of Register Model
?>
