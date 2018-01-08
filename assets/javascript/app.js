var styleChoosen ="",
	beers = [{
		style:"blond ale",
			id:45,
			pairing1: "chicken",
			pairing2: "salmon",
			pairing3: "salad"},
		{style:"british style bitter",
			id:3,
			pairing1: "fish chips",
            pairing2: "roast chicken",
            pairing3: "pork"},
		{style:"pale ale",
			id:1,
			pairing1: "meat pie",
			pairing2: "burger",
			pairing3: "pumpkin flan"},
		{style:"india pale ale",
			id:2,
			pairing1: "curry",
	    	pairing2: "Gorgonzola Cheese",
	    	pairing3: "Carrot Cake"},
		{style:"amber ale",
			id:32,
			pairing1: "chicken",
			pairing2: "seafood",
			pairing3: "burgers"},
		{style:"brown ale",
			id:12,
			pairing1: "roast pork",
			pairing2: "smoked sausage",
			pairing3: "grilled salmon"},
		{style:"abby dubbel/trippel",
			id:59,
			pairing1: "barbecue",
			pairing2: "stews",
			pairing3: "cajun"},
		{style:"barley wine",
			id:17,
			pairing1: "stilton cheese",
			pairing2: "chocolate hazelnut torte",
			pairing3: "toffee caramel cheesecake"},
		{style:"porter",
			id:104,
			pairing1: "barbecue",
			pairing2: "sausages",
			pairing3: "blackened fish"},
		{style:"oatmeal stout",
			id:21,
			pairing1: "barbecue",
			pairing2: "mole",
			pairing3: "chocolate espresso cake"},
		{style:"hefeweizen",
			id:48,
			pairing1: "salad",
			pairing2: "seafood",
			pairing3: "sushi"},
		{style:"witbier",
			id:65,
			pairing1: "seafood",
			pairing2: "herb cheese",
			pairing3: "banana orange crepes"},
		{style:"weizenbock",
			id:53,
			pairing1: "roast pork",
			pairing2: "smoked ham",
			pairing3: "banana souflee"},
		{style:"pilsener",
		indiad:75,
			pairing1: "chicken",
			pairing2: "bratwurst",
			pairing3: "salad"},
		{style:"dortmunder",
			id:79,
			pairing1: "salad",
			pairing2: "seafood",
			pairing3: "pork"},
		{style:"marzen",
			id:81, 
			pairing1: "chicken (spicy)",
			pairing2: "sausage",
			pairing3: "pork (spicy)"},
		{style:"amber lager",
			id:101,
			pairing1: "barbecue",
			pairing2: "burgers",
			pairing3: "chili"},
		{style:"dark lager",
			id:83,
			pairing1: "barbecue",
			pairing2: "sausage",
			pairing3: "candied ginger pear cake"},
		{style:"pale bock",
			id:89,
			pairing1: "fried chicken",
			pairing2: "spicy Thai",
			pairing3: "Korean barbecue"},
		{style:"doppelbock",
			id:90,
			pairing1: "duck",
			pairing2: "roast pork",
			pairing3: "German chocolate cake"},
   		];

	$(".orange-text").on("click", function (){
		styleChoosen = parseInt($(this).attr("id"));
		console.log(styleChoosen);
		$("#food1").html($(this).attr("pairing1"));
		var queryURL = "http://api.brewerydb.com/v2/beers?key=79f4d7966b1dbe7c1504f6d2b51eb3ee&styleId="+styleChoosen+"&order=random&randomCount=5&hasLabels=Y&callback=JSON_CALLBACK";
		$.ajax( {
			url: queryURL,
			method: "GET",
	})

	.done(function(response) {
		var results = response.data;
		console.log(response.data);
});
   	 

	

		for (var i =0; i<results.length;i++)
			{
				console.log(results[i].name);
				console.log(results[i].description);
				console.log(results[i].labels.large);

				$("#description").html(results[i].description);

				//init carousel
			    var slider = $('.carousel');
			    slider.carousel();

					//add a new item
				slider.append("<div class='carousel-item'><img src='"+results[i].labels.large+"' id='image1'><div class='beerName'>"+results[i].name+"</div></div>");
			    
			    //remove the 'initialized' class which prevents slider from initializing itself again when it's not needed
			    if (slider.hasClass('initialized')){
						slider.removeClass('initialized')
			    }

			   //just reinit the carousel
			    slider.carousel();   
			}			
		
	})
         

  	
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



