<?php
	/***
	* User Class
	*********************/
	class User{
	      
	      //Global Attributes
	      public $userid;
	      public $username;
	      public $password;
	      public $permissionid;

	      /***
	      * construct
	      * Constructor
	      **********************/
	      function __construct(){

	      }//End of construct function

	      /***
	      * getAll
	      *	Method for getting all users from DB
	      * @params none
	      * @return all the users  array
	      *******************************/
	      function getAll(){

	      	       $conn = connection();
		       
		       $users = mysqli_query( $conn, "SELECT * FROM User" );
		       $users_array = array();

		       while( $u = mysqli_fetch_array( $users ) ){
				$temp_user = new User();
				$temp_user->userid = $u['userid'];
				$temp_user->userid = $u['username'];
				$temp_user->userid = $u['password'];
				$temp_user->userid = $u['permissionid'];
				
				array_push( $users_array, $temp_user );
		       }
		       close( $conn );
		       return $uses_array;
		       
	      }//End of getAll function

	      /***
	      * getUserById
	      *	Function that return user by its id
	      * @param id
	      * @return user
	      *************************************/
	      function getUserById( $id ){
	      	       
		       $conn = connection();
		       
		       $query = "SELECT * FROM User WHERE userid=".$id;
		       
		       $db_user = mysqli_query( $conn, $query );
		       $user = new User();

		       $u = mysqli_fetch_array( $db_user );

		       $user->userid = $u['userid'];
		       $user->username = $u['username'];
		       $user->password = $u['password'];
		       $user->permissionid = $u['permissionid'];
		       
		       close( $conn );
		       return $user;

	      }//End of getUserById function

	      /***
	      * getUserByUsername
	      * Function that returns user by its name
	      *	@param desc - description
	      * @return user
	      ****************************************/
	      function getUserByUsername( $un ){
	      	       
		       $conn = connection();
		       
		       $query = "SELECT * FROM User WHERE username='".$un."'";
		       
		       $db_user = mysqli_query( $conn, $query );
		       $user = new User();

		       $u = mysqli_fetch_array( $db_user );

		       $user->userid = $u['userid'];
		       $user->username = $u['username'];
		       $user->password = $u['password'];
		       $user->permissionid = $u['permissionid'];
		       
		       close( $conn );
		       return $user;

	      }//End of getUserByDescription function

	}//End of User Class Model
?>