var styleChoosen,
	chosenID = "",
	foodChoice = "",
	timeout, autoplay,
	beers = [{
			style: "blond ale",
			id: 45,
			pairing1: "chicken",
			pairing2: "salmon",
			pairing3: "salad"
		},
		{
			style: "british style bitter",
			id: 3,
			pairing1: "fish and chips",
			pairing2: "roast chicken",
			pairing3: "pork"
		},
		{
			style: "pale ale",
			id: 1,
			pairing1: "meat pie",
			pairing2: "burger",
			pairing3: "pumpkin flan"
		},
		{
			style: "india pale ale",
			id: 2,
			pairing1: "curry",
			pairing2: "Gorgonzola Cheese",
			pairing3: "Carrot Cake"
		},
		{
			style: "amber ale",
			id: 32,
			pairing1: "chicken",
			pairing2: "seafood",
			pairing3: "burgers"
		},
		{
			style: "brown ale",
			id: 12,
			pairing1: "roast pork",
			pairing2: "smoked sausage",
			pairing3: "grilled salmon"
		},
		{
			style: "abby dubbel/trippel",
			id: 59,
			pairing1: "barbecue",
			pairing2: "stews",
			pairing3: "cajun"
		},
		{
			style: "barley wine",
			id: 17,
			pairing1: "stilton cheese",
			pairing2: "chocolate hazelnut torte",
			pairing3: "toffee caramel cheesecake"
		},
		{
			style: "porter",
			id: 104,
			pairing1: "barbecue",
			pairing2: "sausages",
			pairing3: "blackened fish"
		},
		{
			style: "oatmeal stout",
			id: 21,
			pairing1: "barbecue",
			pairing2: "mole",
			pairing3: "chocolate espresso cake"
		},
		{
			style: "hefeweizen",
			id: 48,
			pairing1: "salad",
			pairing2: "seafood",
			pairing3: "sushi"
		},
		{
			style: "witbier",
			id: 65,
			pairing1: "seafood",
			pairing2: "herb cheese",
			pairing3: "banana orange crepes"
		},
		{
			style: "weizenbock",
			id: 53,
			pairing1: "roast pork",
			pairing2: "smoked ham",
			pairing3: "banana souflee"
		},
		{
			style: "pilsener",
			indiad: 75,
			pairing1: "chicken",
			pairing2: "bratwurst",
			pairing3: "salad"
		},
		{
			style: "dortmunder",
			id: 79,
			pairing1: "salad",
			pairing2: "seafood",
			pairing3: "pork"
		},
		{
			style: "marzen",
			id: 81,
			pairing1: "chicken (spicy)",
			pairing2: "sausage",
			pairing3: "pork (spicy)"
		},
		{
			style: "amber lager",
			id: 101,
			pairing1: "barbecue",
			pairing2: "burgers",
			pairing3: "chili"
		},
		{
			style: "dark lager",
			id: 83,
			pairing1: "barbecue",
			pairing2: "sausage",
			pairing3: "candied ginger pear cake"
		},
		{
			style: "pale bock",
			id: 89,
			pairing1: "fried chicken",
			pairing2: "spicy Thai",
			pairing3: "Korean barbecue"
		},
		{
			style: "doppelbock",
			id: 90,
			pairing1: "duck",
			pairing2: "roast pork",
			pairing3: "German chocolate cake"
		}
        ];
$(".orange-text").on("click", function () {
	chosenID = $(this).attr("id");
	styleChoosen = parseInt($(this).attr("id"));
	$(".optionsPanel").fadeIn(1000);
	console.log(styleChoosen);
	populateBeerCarousel(styleChoosen);
	populateBeerStyleInfo(styleChoosen);
	populateFoodChoices(styleChoosen);
});

$(".waves-effect").click(function () {
	$("#recipeTitle").fadeIn(1000);
	$("#recipeList").fadeIn(1000);
	$("#recipeInstruction").fadeIn(1000);
	foodChoice = $(this).text();
	$(".collapsible-body").empty();
	populateRecipeHeaders(foodChoice);
})

function populateBeerCarousel(styleChoosen){

		$("#food1").html($(this).attr("pairing1"));
		var queryURL = "http://api.brewerydb.com/v2/beers?key=79f4d7966b1dbe7c1504f6d2b51eb3ee&styleId="+styleChoosen+"&order=random&randomCount=5&hasLabels=Y&callback=JSON_CALLBACK";
		$.ajax( {
			url: queryURL,
			method: "GET",
		})

		.done(function(response) {
        	var results = response.data;
        	$(".carousel").carousel().empty();
	        for (var i =0; i<results.length;i++)
	        {
	            var string = results[i].labels.large

	            $("#description").html(results[i].description);
	            
	            //init carousel
	            var slider = $('.carousel');
					slider.carousel({
					duration: 300,
					onCycleTo : function($current_item, dragged) {
						stopAutoplay();
						startAutoplay(slider);
					}
				});

                //add a new item
	            slider.append("<div class='carousel-item'><img class='responsive-img circle' src='"+results[i].labels.large+"' style='{height:300px;width:300px;}' id='image1'><div class='beerName'>"+results[i].name+"</div></div>");
	                        
	            //remove the 'initialized' class which prevents slider from initializing itself again when it's not needed
	            if (slider.hasClass('initialized')){
	                    slider.removeClass('initialized')
	            }
	           
	            var autoplay_id;
				function startAutoplay($carousel) {
					autoplay_id = setInterval(function() {
					$carousel.carousel('next');
					}, 3000); // every 5 seconds
				}

				function stopAutoplay() {
				  if(autoplay_id) {
				    clearInterval(autoplay_id);
				  }
				}           
        }
})
			// var results = response.data;
			// console.log(response.data);
			// for (var i =0; i<results.length;i++)
			// 	{
			// 		console.log(results[i].name);
			// 		console.log(results[i].description);
			// 		console.log(results[i].labels.large);

			// 		//init carousel
			// 	    var slider = $('.carousel');
			// 	    slider.carousel();

			// 			//add a new item
			// 		slider.append("<div class='carousel-item'><img src='"+results[i].labels.large+"' id='image1'><div class='beerName'>"+results[i].name+"</div></div>");
				    
			// 	    //remove the 'initialized' class which prevents slider from initializing itself again when it's not needed
			// 	    if (slider.hasClass('initialized')){
			// 				slider.removeClass('initialized')
			// 	    }

			// 	}			
		//});
}

function populateBeerStyleInfo(styleChoosen) {
	var queryURL = "http://api.brewerydb.com/v2/styles?key=79f4d7966b1dbe7c1504f6d2b51eb3ee&callback=JSON_CALLBACK";
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function (response) {
		var results = response.data;
		console.log(response.data);
		for (var i = 0; i < results.length; i++) {
			if (results[i].id === styleChoosen) {
				$("#beerStyleName").text(results[i].name);
				$("#beerStyleDesc").text(results[i].description);
			}
		}
	});
}

function populateFoodChoices(chosenID) {
	for (var i = 0; i < beers.length; i++) {
		if (beers[i].id === chosenID) {
			$("#foodPair1").text(beers[i].pairing1);
			$("#foodPair2").text(beers[i].pairing2);
			$("#foodPair3").text(beers[i].pairing3);
		}
	}
}

function populateRecipeHeaders(foodChoice){
	var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=8e66c137&_app_key=7a80d82eae7315aa6e6f778cb494f46e&q="+foodChoice; //query for list of recipes
		
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		for (var i =0; i < 4; i++)
		{
			console.log(response.matches[i]);
			console.log(response.matches[i].ingredients);			
		}

		$("#recipe-head1").text(response.matches[0].recipeName);
		populateRecipeURL(1,response.matches[0].id);

    	$("#recipe-head2").text(response.matches[1].recipeName);
    	populateRecipeURL(2,response.matches[1].id);

    	$("#recipe-head3").text(response.matches[2].recipeName);
    	populateRecipeURL(3,response.matches[2].id);

    	$("#recipe-head4").text(response.matches[3].recipeName);
    	populateRecipeURL(4,response.matches[3].id);

    	$("#recipe-head5").text(response.matches[4].recipeName);
    	populateRecipeURL(5,response.matches[4].id);

    	//recipe 1
    	$("#recipe-body1").prepend("<div class='ingredients' id='ingredients1'><b>Ingredients:</b><br></div><div class='recipeInfo'><img class='recipeImg' src="+response.matches[0].smallImageUrls+"><div id='totalTime1'><div id='yield1'>Yields: </div></div>");
		var ingredients = response.matches[0].ingredients;
		var ingredientsHtml = "<ul class='ingredients'>";
		for (var i =0; i < ingredients.length ; i++)
		{
			ingredientsHtml = ingredientsHtml + "<li>"+ingredients[i]+"</li>";
		}
		ingredientsHtml = ingredientsHtml + "</ul>";
		$('#ingredients1').append(ingredientsHtml);

		//recipe 2
    	$("#recipe-body2").prepend("<div class='ingredients' id='ingredients2'><b>Ingredients:</b><br></div><div class='recipeInfo'><img class='recipeImg' src="+response.matches[1].smallImageUrls+"><div id='totalTime2'><div id='yield2'>Yields: </div></div>");
		var ingredients = response.matches[1].ingredients;
		var ingredientsHtml = "<ul class='ingredients'>";
		for (var i =0; i < ingredients.length ; i++)
		{
			ingredientsHtml = ingredientsHtml + "<li>"+ingredients[i]+"</li>";
		}
		ingredientsHtml = ingredientsHtml + "</ul>";
		$('#ingredients2').append(ingredientsHtml);

		//recipe 3
    	$("#recipe-body3").prepend("<div class='ingredients' id='ingredients3'><b>Ingredients:</b><br></div><div class='recipeInfo'><img class='recipeImg' src="+response.matches[2].smallImageUrls+"><div id='totalTime3'><div id='yield3'>Yields: </div></div>");
		var ingredients = response.matches[2].ingredients;
		var ingredientsHtml = "<ul class='ingredients'>";
		for (var i =0; i < ingredients.length ; i++)
		{
			ingredientsHtml = ingredientsHtml + "<li>"+ingredients[i]+"</li>";
		}
		ingredientsHtml = ingredientsHtml + "</ul>";
		$('#ingredients3').append(ingredientsHtml);

		//recipe 4
    	$("#recipe-body4").prepend("<div class='ingredients' id='ingredients4'><b>Ingredients:</b><br></div><div class='recipeInfo'><img class='recipeImg' src="+response.matches[3].smallImageUrls+"><div id='totalTime4'><div id='yield4'>Yields: </div></div>");
		var ingredients = response.matches[3].ingredients;
		var ingredientsHtml = "<ul class='ingredients'>";
		for (var i =0; i < ingredients.length ; i++)
		{
			ingredientsHtml = ingredientsHtml + "<li>"+ingredients[i]+"</li>";
		}
		ingredientsHtml = ingredientsHtml + "</ul>";
		$('#ingredients4').append(ingredientsHtml);

		//recipe 5
		$("#recipe-body5").prepend("<div class='ingredients' id='ingredients5'><b>Ingredients:</b><br></div><div class='recipeInfo'><img class='recipeImg' src="+response.matches[4].smallImageUrls+"><div id='totalTime5'><div id='yield5'>Yields: </div></div>");
		var ingredients = response.matches[4].ingredients;
		var ingredientsHtml = "<ul class='ingredients'>";
		for (var i =0; i < ingredients.length ; i++)
		{
			ingredientsHtml = ingredientsHtml + "<li>"+ingredients[i]+"</li>";
		}
		ingredientsHtml = ingredientsHtml + "</ul>";
		$('#ingredients5').append(ingredientsHtml);
	});
}


function populateRecipeURL(recipeNum,recipeID){
	var queryURL = "http://api.yummly.com/v1/api/recipe/"+recipeID+"?_app_id=8e66c137&_app_key=7a80d82eae7315aa6e6f778cb494f46e"; //query for specific recipe ID
	
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){		
		console.log(response);
		console.log(response.yield);
		console.log(response.source.sourceRecipeUrl);		
		var recipeHTML = "<br><a target='_blank' href='"+response.source.sourceRecipeUrl+"'>"+response.source.sourceRecipeUrl+"</a></div>";	
		var totalTimeHTML = "Total time: "+response.totalTime+"<br>"
		var recipeYield = response.yield;
		switch(recipeNum) {
		    case 1:
		        $("#ingredients1").append(recipeHTML);
		        $("#yield1").append(recipeYield);
		        $("#totalTime1").append(totalTimeHTML);
		        break;
		    case 2:
		       $("#ingredients2").append(recipeHTML);
		        $("#yield2").append(recipeYield);
		        $("#totalTime2").append(totalTimeHTML);
		        break;
	        case 3:
		        $("#ingredients3").append(recipeHTML);
		        $("#yield3").append(recipeYield);
		        $("#totalTime3").append(totalTimeHTML);
		        break;
	        case 4:
		        $("#ingredients4").append(recipeHTML);
		        $("#yield4").append(recipeYield);
		        $("#totalTime4").append(totalTimeHTML);
		        break;
	        case 5:
		        $("#ingredients5").append(recipeHTML);
		        $("#yield5").append(recipeYield);
		        $("#totalTime5").append(totalTimeHTML);
		        break;
		    default:
		       alert("none");
		}
	});		
}

// $(document).ready(function(){
//     $('.carousel').carousel();
//     $('.collapsible').collapsible();
//     // $('.dropdown-button').dropdown({
//     //     inDuration: 300,
//     //     outDuration: 225,
//     //     constrainWidth: false, // Does not change width of dropdown to that of the activator
//     //     hover: true, // Activate on hover
//     //     gutter: 0, // Spacing from edge
//     //     belowOrigin: false, // Displays dropdown below the button
//     //     alignment: 'left', // Displays dropdown with edge aligned to the left of button
//     //     stopPropagation: false // Stops event propagation
//     //   }
//     // );
