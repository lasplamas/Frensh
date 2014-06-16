<?php
 	/***
        * connection
        * Method that connects to mysql database
        * params none
        * return connection
        *********************/
        function connection(){

                $url = "localhost";
                $user = "root";
                $password = "laspalmas123";
                $db = "TemperatureDB";

                $conn = mysqli_connect( $url, $user, $password, $db );

                if( $conn ){
                        return $conn;
                }else {
                        die( "Could not connect: " . mysql_error() );
                        return $conn;
                }

	}//End of connection function

        /***
        * close
        * Method that closes connection
        * params none
        * return none
        *****************/
        function close( $c ){
                mysqli_close( $c );
        }//End of close  function

?>
