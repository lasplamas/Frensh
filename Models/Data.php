<?php
	//require $_SERVER['DOCUMENT_ROOT'].'/Frensh/MySQL/connection.php';

	class Data {

		//Global attributes
		public $dataid;
		public $description;
		public $value;

		function __construct(){
			$dataid = "";
			$description = "";
			$value = "";
		}//End of constructor

		function getByID( $id ){

		}//End of getByID Method

		function getAll( ){
			$conn = connection();

			$data = mysqli_query( $conn, "SELECT * FROM Data" );
			$data_array = array();

			while( $d = mysqli_fetch_array( $data ) ){

				$temp_data = new Data();
				$temp_data->dataid = $d['dataid'];
				$temp_data->description = $d['description'];
				$temp_data->value = $d['value'];

				array_push( $data_array, $temp_data );

			}
			close( $conn );
			return $data_array;
		}//End of getAll Method

		function getDataByDescription( $desc ){
			$conn = connection();
                        $query = "SELECT Data WHERE description='".$des."'";
                        $result = mysqli_query( $conn, $query );
                        close( $conn );
			return $result;
		}//End of getByDes Method

		function setValue( $id, $value ){

			$conn = connection();
			$query = "UPDATE Data SET value='".$value."' WHERE dataid=".$id;
			mysqli_query( $conn, $query );
			close( $conn );

		}//End of setValue Method

	}//End of Data Model
?>
