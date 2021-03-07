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
		container.addClass(".photos")

		var photoString = "";
		photoString += "<img src=" + this.imgFile + ">";

		photoString += "<cite>" + this.animal + "</cite";

		container.html(photoString)
		$(".photos").prepend(container)

	}
}
var photos = [
	new Photo("Images/zebra.jpg", 
	"Penguin",["zoo", "zebra", "mammal"], "#0a3410"),

	new Photo ("Images/flamingo.jpg", "Flamingo",
 	["zoo", "flamingo", "bird"], "#154175"),

	new Photo("Images/penguin.jpg", "Penguin"
,["zoo", "penguin", "bird"], "white"),

	new Photo("Images/bird.jpg", 
	"Bird",["zoo", "bird"], "yellow"),

	new Photo ("Images/butterfly1.jpg", "Butterfly",
 	["zoo", "butterfly", ], "purple"),

	new Photo("Images/butterfly2.jpg", "Butterfly"
,["zoo", "butterfly", ], "black"),

	new Photo("Images/giraffe.jpg", 
	"Giraffe",["zoo", "giraffe", "mammal"], "yellow"),

	new Photo ("Images/lion.jpg", "Lion",
 	["zoo", "lion", "mammal"], "orange"),

	new Photo("Images/sheep.jpg", "Big Horn Sheep"
,["zoo", "sheep", "mammal"], "blue"),

	new Photo("Images/gorilla.jpg", "Gorilla"
,["zoo", "gorilla", "mammal"], "black")

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

	$(".photos").not("." + tag).hide();

	$("." + tag).fadeIn();

	$(".filter").removeClass("active");
	$(this).addClass("active");
	

})