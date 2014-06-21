var temp_array = new Array();
var hum_array = new Array();
var lum_array = new Array();

$(document).ready(function(){
    
    $.jqplot.config.enablePlugins = true;
    
    var line1=[['12/30/2008 4:05:45 AM',45.6], ['12/30/2008 4:10:45 AM',6.5], ['12/30/2008 4:15:45 AM',55.7], ['12/30/2008 4:20:45 AM',9], ['12/30/2008 4:25:45 AM', 33.2]];
    
    $.ajax({
	'async' : false,
	'dataType' : 'json',
	'type' : 'GET',
	'url' : 'Controllers/RegisterController.php',
	'data' : { 'action' : 'getLastTen', 'id': '1' },
	'success' : function( data ){
	    var i = 0;
	    while( data[i] != null ){
		var temp2 = [ ''+data[i][0], data[i][1] ];
		temp_array.push( temp2 );
		i++;
	    }
	}
    });
    $.ajax({
	'async' : false,
	'dataType' : 'json',
	'type' : 'GET',
	'url' : 'Controllers/RegisterController.php',
	'data' : { 'action' : 'getLastTen', 'id': '2' },
	'success' : function( data ){
	    var i = 0;
	    while( data[i] != null ){
		var hum2 = [ ''+data[i][0], data[i][1] ];
		hum_array.push( hum2 );
		i++;
	    }
	}
    });
    $.ajax({
	'async' : false,
	'dataType' : 'json',
	'type' : 'GET',
	'url' : 'Controllers/RegisterController.php',
	'data' : { 'action' : 'getLastTen', 'id': '5' },
	'success' : function( data ){
	    var i = 0;
	    while( data[i] != null ){
		var lum2 = [ ''+data[i][0], data[i][1] ];
		lum_array.push( lum2 );
		i++;
	    }
	}
    });
    

    var plot2 = $.jqplot('chartTemp', [temp_array], {  
   	  title: 'Temperatura',
      series:[{lineWidth:4, markerOptions:{style:'square'}}],
      cursor:{
            zoom:true,
            looseZoom: true
        },
      axes:{
            xaxis:{
                renderer:$.jqplot.DateAxisRenderer, 
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer
                    
                },
                tickOptions:{ 
                    fontSize:'10pt', 
                    fontFamily:'Tahoma', 
                    angle:-40,
                    formatString:'%x, %R'
                }
               
            },
            yaxis:{
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer},
                    labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                    tickOptions:{
                        fontSize:'10pt', 
                        fontFamily:'Tahoma', 
                        angle:30
                    }, 
                    label:'Humedad %'
            }
        }
        
  });
 
var plot2 = $.jqplot('chartHum', [hum_array], {  
   	  title: 'Humedad',
      series:[{lineWidth:4, markerOptions:{style:'square'}}],
      cursor:{
            zoom:true,
            looseZoom: true
        },
      axes:{
            xaxis:{
                renderer:$.jqplot.DateAxisRenderer, 
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer
                    
                },
                tickOptions:{ 
                    fontSize:'10pt', 
                    fontFamily:'Tahoma', 
                    angle:-40,
                    formatString:'%x, %R'
                }
               
            },
            yaxis:{
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer},
                    labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                    tickOptions:{
                        fontSize:'10pt', 
                        fontFamily:'Tahoma', 
                        angle:30
                    }, 
                    label:'Humedad %'
            }
        }
        
  });
   
  
  
 
  
  var plot2 = $.jqplot('chartLux', [lum_array], {  
      title: 'Cantidad de Luz',
      series:[{lineWidth:4, markerOptions:{style:'square'}}],cursor:{
            zoom:true,
            looseZoom: true
      },
      axes:{
            xaxis:{
                renderer:$.jqplot.DateAxisRenderer, 
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer
                },
                tickOptions:{ 
                    fontSize:'10pt', 
                    fontFamily:'Tahoma', 
                    angle:-40,
                    formatString:'%R, %x'
                }
                
            },
            yaxis:{
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer},
                    labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                    tickOptions:{
                        fontSize:'10pt', 
                        fontFamily:'Tahoma', 
                        angle:30
                    },
                    label:'Lux'
            }
      }
  });
 
});//End of on ready function
