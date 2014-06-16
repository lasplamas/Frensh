<!DOCTYPE html>
<html>

	<head>
		<!-- Latest compiled and minified CSS -->
                <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

                <!-- Optional theme -->
                <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

		<link href="http://getbootstrap.com/examples/dashboard/dashboard.css" rel="stylesheet">

		<link rel="stylesheet" type="text/css" href="styles/Attributes/jchartfx.attributes.smoothness.css" />
		<link rel="stylesheet" type="text/css" href="styles/Palettes/jchartfx.palette.smoothness.css" />


		<title>Control de monitoreo</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    		<script type="text/javascript" src="js/jchartfx.system.js"></script>
    		<script type="text/javascript" src="js/jchartfx.coreVector.js"></script>

		<script src="js/buttonHandler.js" ></script>

	</head>

	<body style>
		<!-------- Menu Bar ------>
		<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      			<div class="container-fluid">
        			<div class="navbar-header">
          				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            					<span class="sr-only">Toggle navigation</span>
            					<span class="icon-bar"></span>
            					<span class="icon-bar"></span>
            					<span class="icon-bar"></span>
          				</button>
          				<a class="navbar-brand" href="#">Sistema Archivo Historico</a>
        			</div>
        			<div class="navbar-collapse collapse">
          				<ul class="nav navbar-nav navbar-right">
            					<li><a href="#">Config</a></li>
            					<li><a href="#">Cerrar Sesion</a></li>
            					<li><a href="#">Ayuda</a></li>
          				</ul>
          				<form class="navbar-form navbar-right">
            					<input type="text" class="form-control" placeholder="Buscar...">
          				</form>
        			</div>
      			</div>
    		</div>

                </div><br/><br/>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
          				<ul class="nav nav-sidebar">
            					<li id="bEstadoGeneral" class="active"><a href="#">Estado General</a></li>
            					<li id="bEstadoHistorico"><a href="#">Estado Historico</a></li>
            					<li id="bProgramarRegimen"><a href="#">Programar Regimen</a></li>
          				</ul>
        			</div>
				<!----------Ventana Estado General------------>
				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="estadoGeneral">
					<h1 class="page-header">Valores de Monitoreo</h1>

					<div class="column1">

						<div class="imagen"></div>


						<div id="lbTemperadura" class="alert alert-info">
                                                        <strong> Temperatura Actual: <p id="lTemp" style="color:#6c77b5"></p></strong>
                                                </div>
					</div>

					<div class="column2">

						<div class="imagen1"></div>

						<div id="lbHumedad" class="alert alert-info">
                                                        <strong> Humedad Actual: <p id="lHum" style="color:#6c77b5"></p></strong>
                                                </div>
					</div>

					<div class="column3">


						<div class="imagen2">

						<div id="lbLuz" class="alert alert-info">
							<strong> Luz Actual: <p id="lLuz" style="color:#6c77b5"></p></strong>
						</div>
					</div>
					<hr />
					<h2>Controles</h2><hr/>
					<h3 style="color:#29bdbd">Ventiladores de Respaldo
					<input id="bActivar" value="SET" type="button" class="btn btn-lg btn-success"/>
					</h3>
				</div>
			</div>
			<!----------Ventana Estado Historico---------->
                        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="estadoHistorico">
				<h1 class="page-header">Estado Historico</h1>
				<div id="ChartDiv" style="width:600px;height:400px;display:inline-block"></div>
                        </div>

                        <!----------Ventana de Programar Regimen------>
                        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="programarRegimen">
                        	<h1 class="page-header">Programar Regimen</h1>
				<div class="row" id="row0" >
					<div class="col-xs-6 col-sm-3"><h3>Temperatura</h3></div>
					<div class="col-xs-6 col-sm-3"><h4>Maximo</h4><input type="text" class="form-control" id="max0"/></div>
					<div class="col-xs-6 col-sm-3"><h4>Minimo</h4><input type="text" class="form-control" id="min0"/></div>
					<div class="col-xs-6 col-sm-3"><br/>
						<button type="button" class="btn btn-lg btn-info" id="edit0">Editar</button>
						<button type="button" class="btn btn-lg btn-primary" id="save0">Guardar</button>
					</div>
				</div>
				<div class="row" id="row1" >
                                        <div class="col-xs-6 col-sm-3"><h3>Humedad</h3></div>
                                        <div class="col-xs-6 col-sm-3"><h4>Maximo</h4><input type="text" class="form-control" id="max1"/></div>
                                        <div class="col-xs-6 col-sm-3"><h4>Minimo</h4><input type="text" class="form-control" id="min1"/></div>
                                        <div class="col-xs-6 col-sm-3"><br/>
                                                <button type="button" class="btn btn-lg btn-info" id="edit1">Editar</button>
                                                <button type="button" class="btn btn-lg btn-primary" id="save1">Guardar</button>
                                        </div>
                                </div>
				<div class="row" id="row2" >
                                        <div class="col-xs-6 col-sm-3"><h3>Luminocidad</h3></div>
                                        <div class="col-xs-6 col-sm-3"><h4>Maximo</h4><input type="text" class="form-control" id="max2"/></div>
                                        <div class="col-xs-6 col-sm-3"><h4>Minimo</h4><input type="text" class="form-control" id="min2"/></div>
                                        <div class="col-xs-6 col-sm-3"><br/>
                                                <button type="button" class="btn btn-lg btn-info" id="edit2">Editar</button>
                                                <button type="button" class="btn btn-lg btn-primary" id="save2">Guardar</button>
                                        </div>
                                </div>

                      	</div>

		</div>

		<!-- Latest compiled and minified JavaScript -->
                <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script src="http://getbootstrap.com/assets/js/docs.min.js"></script>
	</body>
</html>
