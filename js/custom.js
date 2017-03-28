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

