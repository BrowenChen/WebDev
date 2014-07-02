//Managing Poll list. $scope is the glue between views and model in angular
function PollListCtrl($scope){
	$scope.polls = [];

}

//Voting/ viewing poll results
function PollItemCtrl($scope, $routeParams){
	$scope.poll = {}; 
	$scope.vote = function() {};
}

//Creating a new poll
function PollNewCtrl($scope){
	//Poll with options. Variable
	$scope.poll ={
		question: '',
		choices = [ {text:''}, {text:''}, {text:''}]
	};
	//Add choices for poll function
	$scope.addChoice = function(){
		$scope.poll.choices.push({text:''});
	};

	//Create a poll. createPoll property of Poll Controll. 
	$scope.createPoll = function(){};
}