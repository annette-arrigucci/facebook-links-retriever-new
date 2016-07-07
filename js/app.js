$(document).ready(function() {

	var friend1 = {
		name: "Friend Name1",
		link: "http://www.facebook.com",
		picture: "images/picture.jpg"
	};

	var friend2 = {
		name: "Friend Name2",
		link: "http://www.facebook.com",
		picture: "images/picture.jpg"
	};

	var friend3 = {
		name: "Friend Name3",
		link: "http://www.facebook.com",
		picture: "images/picture.jpg" 
	};

	var friendsList = [friend1, friend2, friend3];

	for(var i=0; i<3; i++) {
		$("#friend-"+(i+1)+"-name").text(friendsList[i].name);
		$("a#friend-link-"+(i+1)).attr('href', 
friendsList[i].link);
		$("#friend-photo-"+(i+1)).attr('src', 
friendsList[i].picture);
	}

/*	for(var i=0; i<3; i++){
		var myClone = $(".links-example").clone(true);
		$(".links-feed").append(myClone);
	};*/

	/*$("#search").on("click", function {
  	//checkLoginState();
  		var searchTerm = $("#friend-search").val();
    	alert(searchTerm);
  		var queryString = "/search?q=" + searchTerm + "&type=user";
  		alert(queryString);
  		/*FB.api(queryString, function(response) {
       	alert(response.data[0].name);
        });
  });*/

	/*var link1 = {
		name: "Headline1",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 0
	};

	var link2 = {
		name: "Headline2",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 1
	};

	var link3 = {
		name: "Headline3",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 2
	};

	var link4 = {
		name: "Headline4",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 4
	};

	var link5 = {
		name: "Headline5",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 3
	};

	var link6 = {
		name: "Headline6",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 2
	};

	var link7 = {
		name: "Headline7",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 1
	};

	var link8 = {
		name: "Headline8",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 1
	};

	var link9 = {
		name: "Headline9",
		description: "The description of the link goes here",
		link: "http://www.nytimes.com",
		from: "My Friend",
		picture: "images/link-image.jpg",
		message: "This is really cool!",
		likes: 0
	};

	var linksList = [link1, link2, link3, link4, link5, link6, link7, link8, link9];
	
	linksList.sort(function(a, b) {
    	return b.likes - a.likes;
	});
	
	
	$.each(linksList, function(i, myVal) {
		showLink(myVal);
		var result = showLink($('.links-template').clone(), myVal);
		$('.links-feed').append(result);
	});

	/*var showLink = function(myClone, linkValue) {
		var myUrl = myClone.find('.link-url');
		myUrl.attr('href', linkValue.link);
		return myClone;
	};*/
	
	/*var showLink = function (linkValue) {
		/*var result = $('.links-template').clone();

		var myUrl = result.find('.link-url');
		myUrl.attr('href', linkValue.link);

		var myImage = result.find('.link-image');
		myImage.attr('src', linkValue.picture);

		var myHeadline = result.find('.link-headline');
		myHeadline.text(linkValue.name);

		var myDescription = result.find('.link-summary');
		myHeadline.text(linkValue.description);

		var myPostedBy = result.find('.link-posted-by');
		myPostedBy.text(linkValue.from);

		var myMessage = result.find('.link-message');
		myMessage.text(linkValue.message);

		var myNumLikes = result.find('.link-num-likes');
		myNumLikes.text(linkValue.likes);
		alert("Hello World");
		var result = null;

		return result;
	};*/

});