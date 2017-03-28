/*$(document).ready(function(){
	
});*/
$(document).ready(init);

	var currentSection = null;

function init()
{
	currentSection = $('#home-sec');
	$('#btninfo').click(onClickInfo);
	$('#btncalculator').click(onClickCalculator);
	$('#btnfooter').click(onClickFooter);
    

}
	
	function onClickInfo(){
		gotoSection('info');
	}
	
	function onClickCalculator(){
		gotoSection('calculator');
	}
	
	function onClickFooter(){
		gotoSection('footer')
	}

function gotoSection(_identificador){
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificador);
	
	nextSection.addClass('visible');
    currentSection = nextSection;
	
}

//-------------------------MAPA
var map;


function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:14,
	disableDefaulttUI:true,
    center: {lat: -16.457368, lng: -71.531508}
  });
	
	 var myLatPazperu = {lat: -16.457389, lng: -71.5315308};
	
	
	
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('origen').addEventListener('change', onChangeHandler);
  document.getElementById('destino').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('origen').value,
    destination: document.getElementById('destino').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}









