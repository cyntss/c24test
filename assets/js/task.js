(function() {

	var neighborhoodSize = 10000;
	var gossipMaxSize = 20;
	var groupsMaxAmount = 500;
	

	function CreateGossipGroups (totalPeople, maxPeoplePerGroup, maxNumberOfGroups) {
		this.neighborhood = totalPeople;
		this.people = maxPeoplePerGroup;
		this.groups = maxNumberOfGroups;
	}

	var gossipGroups = new CreateGossipGroups(neighborhoodSize, gossipMaxSize, groupsMaxAmount);

	console.log(gossipGroups.neighborhood, gossipGroups.people, gossipGroups.groups)

})();