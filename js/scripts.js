function Quote(imgFile, author, tags, color) {
	this.imgFile = imgFile; 
	this.author= author;
	this.tags= tags;
	this.color= color;
	this.display= function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
			// $("body").prepend("<button>" + tag + "</button>")
		})
		container.css("background", this.color)
		container.addClass("quote")

		var quoteString = "";
		quoteString += "<img src=" + this.imgFile + ">";

		quoteString += "<cite>" + this.author + "</cite";

		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}
	//////HELLLLPPPPPPPPPPPPPP
var quotes = [
	new Quote("Images/zebra.jpg", 
	"Bob Ross",["zoo", "zebra", "mammal"], "#0a3410"),

	new Quote ("Images/flamingo.jpg", "Henry Matisse",
 	["zoo", "flamingo", "bird"], "#154175"),

	new Quote("Images/penguin.jpg", "Bob Ross"
,["zoo", "penguin", "bird"], "#6E1DA5")]



//global taglist
var tagList = []

quotes.forEach(function(quote){
	quote.display();
//check to see if tag has been added to taglist
	quote.tags.forEach(function(tag){
		if(!tagList.includes(tag)){
			//if it isn't added, add it
		tagList.push(tag);
		//and also make a button for it
		$(".buttons").prepend("<button class='filter'>" + tag + "</button>")

		}
	})
})
console.log(tagList)

$(".filter").on("click", function() {
	var tag = $(this).text();

	console.log(tag)

	$(".quote").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active");
	$(this).addClass("active");
	

})