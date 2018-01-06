var styleChoosen ="",
	beers = [{
		style:"blond ale",
		id:45},
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
		    pairing2: "Gargonzola Cheese",
		    pairing3: "Carrot Cake"},
		{style:"amber ale",
		id:32},
		{style:"brown ale",
		id:12},
		{style:"abby dubbel/trippel",
		id:59},
		{style:"barley wine",
		id:17},
		{style:"porter",
		id:104},
		{style:"oatmeal stout",
		id:21},
		{style:"hefeweizen",
		id:48},
		{style:"witbier",
		id:65},
		{style:"weizenbock",
		id:53},
		{style:"pilsener",
		id:75},
		{style:"dortmunder",
		id:79},
		{style:"marzen",
		id:81},
		{style:"amber lager",
		id:101},
		{style:"dark lager",
		id:83},
		{style:"pale bock",
		id:89},
		{style:"doppelbock",
		id:90},
   		];

	$(".orange-text").on("click", function (){
		styleChoosen = parseInt($(this).attr("id"));
		console.log(styleChoosen);
		var queryURL = "http://api.brewerydb.com/v2/beers?key=79f4d7966b1dbe7c1504f6d2b51eb3ee&styleId="+styleChoosen+"&order=random&randomCount=5&hasLabels=Y&callback=JSON_CALLBACK";
		$.ajax( {
			url: queryURL,
			method: "GET",
	})

	.done(function(response) {
		var results = response.data;
		console.log(response.data);

		for (var i =0; i<results.length;i++)
			{
				console.log(results[i].name);
				console.log(results[i].description);
				console.log(results[i].labels.large);

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
		});
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
//   });


