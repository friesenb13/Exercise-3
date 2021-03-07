function Photo(imgFile, animal, tags, color) {
	this.imgFile = imgFile;
	this.animal= animal;
	this.tags= tags;
	this.color= color;
	this.display= function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);

		})
		container.css("background", this.color)
		container.addClass("photo")

		var photoString = "";
		photoString += "<img src=" + this.imgFile + ">";

		photoString += "<cite>" + this.animal + "</cite";

		container.html(photoString)
		$(".photos").prepend(container)

	}
}
var photos = [
	new Photo("Images/zebra.jpg", 
	"Zebra",["zoo", "zebra", "mammal"], "#6fde50"),

	new Photo ("Images/flamingo.jpg", "Flamingo",
 	["zoo", "flamingo", "bird"], "#b57491"),

	new Photo("Images/penguin.jpg", "Penguin"
,["zoo", "penguin", "bird"], "white"),

	new Photo("Images/bird.jpg", 
	"Bird",["zoo", "bird"], "#f2dc4b"),

	new Photo ("Images/butterfly1.jpg", "Butterfly",
 	["zoo", "butterfly", ], "#a743e0"),

	new Photo("Images/butterfly2.jpg", "Butterfly"
,["zoo", "butterfly", ], "#f03073"),

	new Photo("Images/giraffe.jpg", 
	"Giraffe",["zoo", "giraffe", "mammal"], "#e3f030"),

	new Photo ("Images/lion.jpg", "Lion",
 	["zoo", "lion", "mammal"], "#d17330"),

	new Photo("Images/sheep.jpg", "Big Horn Sheep"
,["zoo", "sheep", "mammal"], "#ffd561"),

	new Photo("Images/gorilla.jpg", "Gorilla"
,["zoo", "gorilla", "mammal"], "#949192")

]




//global taglist
var tagList = []

photos.forEach(function(photo){
	photo.display();
//check to see if tag has been added to taglist
	photo.tags.forEach(function(tag){
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

	$(".photo").not("." + tag).hide();

	$("." + tag).fadeIn();

	$(".filter").removeClass("active");
	$(this).addClass("active");
	

})