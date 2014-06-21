<?php
           session_start();
	   if( isset( $_SESSION['username'] ) ){
	      header("Location: /Frensh/index.php");
	   }
?>
<!DOCTYPE html>
<html leng="es">
	<head>
	        <meta charset="utf-8" />
	        <title>LogIn</title>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

		<!-- Optional theme -->
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                <script src="../js/login.js" ></script>
	</head>
	<body >
		<div class="container">
			<div id="all" align="center" class="cover-container" >
				<h1>Iniciar Sesión!</h1><br />
				<div id="idLoginForm" class="inner-cover">
					<input id="txtUsername" type="text" class="form-control" placeholder="Nombre de Usuario" required autofocus />
					<input id="txtPassword" type="password" class="form-control" placeholder="Contraseña" required />
					<br />

					<button id="bLogin" class="btn btn-lg btn-primary btn-block">Entrar</button>
				</div>
			</div>
		</div>
		<!-- Latest compiled and minified JavaScript -->
		<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

	</body>
</html>
