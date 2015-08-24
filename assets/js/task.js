(function() {

	function CreateGossipGroups (maxPeople, maxPeoplePerGGroup, maxNumberOfGGroups) {
		this.neighborhood = Math.floor((Math.random() * maxPeople) + 1);
		
		function createGroups (neighborhood) {
			var minNumberOfGroups = neighborhood/maxPeoplePerGGroup;
			var maxNumberOfGroups = neighborhood > maxNumberOfGGroups ? maxNumberOfGGroups : neighborhood;
			this.gossipGroupsArray = [];
			
			console.log('Min number of gossip groups: ' + minNumberOfGroups);
			console.log('Max number of gossip groups: ' + maxNumberOfGGroups);

			var peopleInNeighborhood = neighborhood;
			var i = 0;

			while (peopleInNeighborhood > 0 && i < 2) {
				peopleInThisGroup = Math.floor((Math.random() * maxPeoplePerGGroup) + 1)
				console.log(peopleInThisGroup)
				peopleInNeighborhood =  peopleInNeighborhood - peopleInThisGroup;
				console.log(peopleInNeighborhood)
				this.gossipGroupsArray.push(peopleInThisGroup)
				i++;
			}
		}

		var groupsCount = new createGroups(this.neighborhood);
		this.groups = groupsCount.gossipGroupsArray
	};

	var gossipGroups = new CreateGossipGroups(10000, 20, 500);

	console.log('Neighborhood population: ' + gossipGroups.neighborhood);
	
})();