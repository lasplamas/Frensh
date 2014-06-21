<?php

	class Regimen{

		//Global Variables
		public $regimenid;
		public $description;
		public $value;

		/***
		* __construct
		* Constructor
		***********************/
		function __construct(){
			$regimenid = "";
			$description = "";
			$value = "";
		}//End of constructor

		/***
		* getAll
		* Function that returns all the regimens
		* @param none
		* @return a regimen array
		*****************/
		function getAll(){
			$conn = connection();

                        $regimen = mysqli_query( $conn, "SELECT * FROM Regimen" );
                        $regimen_array = array();

                        while( $r = mysqli_fetch_array( $regimen ) ){

                                $temp_regimen = new Regimen();
                                $temp_regimen->regimenid = $r['regimenid'];
                                $temp_regimen->description = $r['description'];
                                $temp_regimen->value = $r['value'];

                                array_push( $regimen_array, $temp_regimen );

                        }
                        close( $conn );
                        return $regimen_array;
		}//End of getAll Function

		/***
		* setVAlueById
		* Function that asing a value to a regimen by id
		* @param $id
		* @param $val
		* @return none
		***********************/
		function setValueById( $id , $val ){
			$conn = connection();
                        $query = "UPDATE Regimen SET value='".$val."' WHERE regimenid=".$id;
                        mysqli_query( $conn, $query );
                        close( $conn );
		}//End of setValueById

		/***
                * setVAlueByDescription
                * Function that asing a value to a regimen by id
                * @param $des
                * @param $val
                * @return none
                ***********************/
                function setValueByDescription( $des , $val ){
                        $conn = connection();
                        $query = "UPDATE Regimen SET value='".$val."' WHERE description='".$des."'";
                        mysqli_query( $conn, $query );
                        close( $conn );
                }//End of setValueByDescription

		function getValueById( $id ){
			 $conn = connection();

			$controls = mysqli_query( $conn, "SELECT * FROM Regimen where regimenid=".$id );

			$control = new Regimen();

			while( $c = mysqli_fetch_array( $controls ) ){
				$control->regimenlid = $c['regimenid'];
				$control->description = $c['description'];
				$control->value = $c['value'];
			}

			close( $conn );
			return $control->value;
		}//End of fu
	}//End of Regimen Class

?>
