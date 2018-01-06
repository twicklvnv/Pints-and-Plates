var foodChoice = "";
			//styleChoosen = "";
			/*pairings = [
		        {
		            id: "1",
		            pairing1: "meat pie",
		            pairing2: "burger",
		            pairing3: "pumpkin flan"
		        }, 
		        {
		            id: "2",
		            pairing1: "curry",
		            pairing2: "Gargonzola Cheese",
		            pairing3: "Carrot Cake"
		        }, 
		        {
		            id: "3",
		            pairing1: "fish chips",
		            pairing2: "roast chicken",
		            pairing3: "pork"
		        }
		    ];*/
		
		$(document).ready(function(){
	      $('.carousel').carousel();
	    });

	    $(".carousel-item").click(function() {
	    	styleChoosen = $(this).attr("id");
	    	console.log(styleChoosen);
	    	for(var i = 0; i<beers.length; i++){
		    	if(beers[i].id === styleChoosen)
		    	{
		    		$("#foodPair1").text(beers[i].pairing1);
		    		$("#foodPair2").text(beers[i].pairing2);
		    		$("#foodPair3").text(beers[i].pairing3);
		    	}
		    }
	    })

	     $(".foodPairing").click(function() {
	     	foodChoice = $(this).html();
	     	console.log("foodChoice = " + foodChoice);	     

			// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
			//key = 

			var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=8e66c137&_app_key=7a80d82eae7315aa6e6f778cb494f46e&q="+foodChoice; //query for list of recipes
			//var queryURL = "http://api.yummly.com/v1/api/recipe/French-Onion-Soup-The-Pioneer-Woman-Cooks-_-Ree-Drummond-41364?_app_id=8e66c137&_app_key=7a80d82eae7315aa6e6f778cb494f46e"; //query for specific recipe ID

			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(response){
				for (var i =0; i<response.matches.length;i++)
				{
					console.log(response.matches[i]);
					console.log(response.matches[i].recipeName);

					//console.log(response.data[i].shortName); //styles
				}

				$("#collapsiblehead1").text(response.matches[0].recipeName);
		    	$("#collapsiblehead2").text(response.matches[1].recipeName);
		    	$("#collapsiblehead3").text(response.matches[2].recipeName);

				
				console.log(response);
			});
		})