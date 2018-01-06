


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



   	var queryURL = "http://api.brewerydb.com/v2/style/" + id + "?key=79f4d7966b1dbe7c1504f6d2b51eb3ee&callback=JSON_CALLBACK";

   	 $(".orange-text").on("click", function (){
   	 	styleChoosen = parseInt($(this).attr("id"));
	    	console.log(styleChoosen);
	    	var queryURL = "http://api.brewerydb.com/v2/beers?key=79f4d7966b1dbe7c1504f6d2b51eb3ee&styleId="+styleChoosen+"&order=random&randomCount=5&callback=JSON_CALLBACK";

   	$.ajax( {
		url: queryURL,
		method: "GET",
	})

	.done(function(response) {
		var results = response.data;
		console.log(response.data);
});
   	 })

})	

$(document).ready(function(){
    $('.carousel').carousel();
    $('.collapsible').collapsible();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  });
   	
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
//   })


