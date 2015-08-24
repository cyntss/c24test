(function() {

	function CreateGossipGroups (maxPeople, maxPeoplePerGGroup, maxNumberOfGGroups) {
		var neighborhood = Math.floor((Math.random() * maxPeople) + 1);
		console.log('Neighborhood population: ' + neighborhood);
		
		function createGroups (neighborhood) {
			var minNumberOfGroups = neighborhood/maxPeoplePerGGroup;
			var maxNumberOfGroups = neighborhood > maxNumberOfGGroups ? maxNumberOfGGroups : neighborhood;
			this.gossipGroupsArray = [];
			
			console.log('Min number of gossip groups: ' + minNumberOfGroups);
			console.log('Max number of gossip groups: ' + maxNumberOfGGroups);

			var peopleInNeighborhood = neighborhood;
			var i = 0;

			//random insertion of people in groups
			while (peopleInNeighborhood > 0 && i < maxNumberOfGroups) {
				randomNumOfPeople = Math.floor((Math.random() * maxPeoplePerGGroup) + 2);
				peopleInThisGroup = randomNumOfPeople > peopleInNeighborhood ? peopleInNeighborhood : randomNumOfPeople;
				peopleInNeighborhood = peopleInNeighborhood - peopleInThisGroup;
				this.gossipGroupsArray.push(peopleInThisGroup);
				i++;
			};
			//are there people left in no groups? if yes, lets put them in groups
			var e = 1;
			while (peopleInNeighborhood > 0) {
				console.log('People not listed in a gossip groups. Adding more. ' +e+ '° round: ' + peopleInNeighborhood);
				this.gossipGroupsArray.forEach(function(element, index){
					
					if (element < maxPeoplePerGGroup && peopleInNeighborhood > 0) {
						var maxNumberOfPeopleToAdd = maxPeoplePerGGroup - element;
						var randomToAdd = Math.floor((Math.random() * maxNumberOfPeopleToAdd) + 1);
						var peopleToAdd = randomToAdd > peopleInNeighborhood ? peopleInNeighborhood : randomToAdd;
						element = peopleToAdd;
						peopleInNeighborhood = peopleInNeighborhood - peopleToAdd;
					}
					
				});
				e++;
		  };

		};

		var groupsCount = new createGroups(neighborhood);
		this.groupsArray = groupsCount.gossipGroupsArray;
		this.quantityOfGroups = groupsCount.gossipGroupsArray.length;

		//lets create the tree of gossip groups connected. I will give a maximum of 5 connections per element in the array.
		//which means, a person can belong to a maximum of 5 gossip groups
		var maxConnections = 5;		
		var arrayOfGossipGroups = this.groupsArray
		var treeOfConnectionsGG = [];
		
		arrayOfGossipGroups.forEach(function(element, index){
			var randomConnectionSize = Math.floor((Math.random() * maxConnections) + 1);
      
			while (randomConnectionSize > 0) {
			  treeOfConnectionsGG.push(arrayOfGossipGroups[Math.floor(Math.random()*arrayOfGossipGroups.length)]);
			  randomConnectionSize--;
			}
			console.log(treeOfConnectionsGG)

		});

	};

	var gossipGroups = new CreateGossipGroups(10000, 20, 500);
	console.log('Array of gossip groups: ' + gossipGroups.groupsArray);	
	console.log('Number of gossip groups created: ' + gossipGroups.quantityOfGroups);

})();