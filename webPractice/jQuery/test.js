var blockId = 0;

var doNext = function(){
	blockId++;
};





$(document).ready(function(){
	$('#clickme').click(function(){
		$('#test').append('<div id ' + blockId + '> Test Block #' + blockId + '</div>');
		blockId++;
	});
});