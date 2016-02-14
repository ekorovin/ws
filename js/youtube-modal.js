$(document).ready(function(){
	
// BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
// Modal Window for dynamically opening videos

 
 //++++++++++++++++++++++++++++++
 // Youtube
 //++++++++++++++++++++++++++++++

$('a[href^="https://www.youtube.com"]').on('click', function(e){



// Store the query string variables and values
// Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
//var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
//var queryVars = $.parseQuery( queryString );
 
 
 var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1)
 var queryStringArray = queryString.split("&");
 var queryVars = new Array();

for(i = 0; i < queryStringArray.length; i++) {
   queryVars[queryStringArray[i].split("=")[0]] = queryStringArray[i].split("=")[1];
  }
 
 
// if GET variable "v" exists. This is the Youtube Video ID
if ( 'v' in queryVars )
{
e.preventDefault();	
var iFrameCodeStart = '<iframe src="https://www.youtube.com/embed/'+ queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" ';	
// Prevent opening of external page

createModal(iFrameCodeStart);
}
});
 
// Clear modal contents on close.
// There was mention of videos that kept playing in the background.
$('#mediaModal').on('hidden.bs.modal', function () {
$('#mediaModal .modal-body').html('');
});
 
 
 //++++++++++++++++++++++++++++++
 // VIMEO
 //++++++++++++++++++++++++++++++
 $('a[href^="https://vimeo.com"]').on('click', function(e){
	e.preventDefault(); 
	
	var vimeoId = $(this).attr('href').slice( $(this).attr('href').indexOf('.com/') + 5);
	
	//alert(vimeoId);
	 var iFrameStart = '<iframe src="//player.vimeo.com/video/'+ vimeoId+ '"'; 
	
	createModal(iFrameStart);

 
 });
 
}); 



//emdedding video into modal
function createModal(iframeHTML){
 
// Variables for iFrame code. Width and height from data attributes, else use default.
if ($(window).height() < $(window).width()) {
    var vidHeight = $(window).height() * 0.7; // to offset play a little
    var vidWidth = vidHeight * 1.77777-20;
} else {
    var vidWidth = $(window).width() * 0.9-20; //to offset play a little
    var vidHeight = vidWidth / 1.77777;
}

if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
if ( $(this).attr('data-height') ) { vidHeight = parseInt($(this).attr('data-height')); }

 
// Replace Modal HTML with iFrame Embed

var iFrameCode = iframeHTML + 'width="' + vidWidth + '" height="'+ vidHeight +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>';

$('#mediaModal .modal-body').html(iFrameCode);
// Set new width of modal window, based on dynamic video content
$('#mediaModal').on('show.bs.modal', function () {
// Add video width to left and right padding, to get new width of modal window
var modalBody = $(this).find('.modal-body');
var modalDialog = $(this).find('.modal-dialog');
var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
newModalWidth += 'px';
// Set width of modal (Bootstrap 3.0)
$(this).find('.modal-dialog').css('width', newModalWidth);
});
 
// Open Modal
$('#mediaModal').modal();
	
}