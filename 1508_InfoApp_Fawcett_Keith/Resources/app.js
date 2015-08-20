//sets the backgroundColor to black
Ti.UI.setBackgroundColor('#000');

//creates all the variables needed for the grid view
var pHeight = Ti.Platform.displayCaps.platformHeight;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var rowCount = 2;
var margin = 5;
var trueCanvasWidth = pWidth - margin * (rowCount +1);
var size = trueCanvasWidth/rowCount;

//imports my json information from my json.js file
var json = require("json");

//creates largeImage variable
var largeImage;

//creates the window for the table
var tableWindow = Ti.UI.createWindow({
	backgroundColor: "#ddd",
	title: json.phones.title,
});


//creates the window for the grid
var gridWindow = Ti.UI.createWindow({
	backgroundColor: "#ddd",
	title: json.phones.title,
	layout: "horizontal"
	
});

//creates the navigation window for the table view
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});
//creates the navigation window for the grid view
var navWindowTwo = Ti.UI.iOS.createNavigationWindow({
	window: gridWindow
});

//orients the table's navigation window
navWindow.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
];
//orients the grid's navigation window
navWindowTwo.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
];

//creates a scrolling view to contain the grid
var gridContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight-64,
	showVerticalScrollIndicator: true,
	backgroundColor: "#ddd",
	
});

//adds the gridContainer to the gridWindow
gridWindow.add(gridContainer);

//creates a button that will switch between list and grid view
var gridButton =Ti.UI.createButton({
	title: "Grid View",
});

//adds the button to the tables's navigation bar
tableWindow.setRightNavButton(gridButton);

//adds event listener to the gridButton
gridButton.addEventListener("click", function(e){

		//creates the listButton to switch from grid vew to list view
		var listButton =Ti.UI.createButton({
		title: "List View",
	});
	
	//sets the listButton in the grid Windows's navigation bar
	gridWindow.setRightNavButton(listButton);
	
	//when the list button is clicked
	listButton.addEventListener("click", function(e){
		//open the navWindow
		navWindow.open();
		//close the navWindowTwo
		navWindowTwo.close();
	});
	//when the grid button is clicked open the NavWindowTwo
	navWindowTwo.open();
	//close the navWindow
	navWindow.close();
});  

//creates an array variable data
var data = [];

//makes a for loop that runs through the json data
for(var i=0; i<json.phones.rows.length; i++){
	
//creates an image view for the phone image
var img = Ti.UI.createImageView({
	image: json.phones.rows[i].Image,
	height:120,
	left: 10
});
	
//creates a label fro the name of the phone
var title = Ti.UI.createLabel({
	text: json.phones.rows[i].Title,
	left: 150,
	top: 15,
	font: {fontSize: 16, fontFamily: "Arial"}
});

//creates a lable for the phones price
var price = Ti.UI.createLabel({
	text: json.phones.rows[i].Price,
	left: 150,
	top: 45,
	font: {fontSize: 14, fontFamily: "Arial"}

});

//creates a tableViewRow with all the json data in it
var row = Ti.UI.createTableViewRow({
	height: "auto",
	hasChild: "true",
	backgroundColor: "#ddd",
	name : json.phones.rows[i].Title,
	image : json.phones.rows[i].Image,
	price : json.phones.rows[i].Price,
	os : json.phones.rows[i].OS,
	screenSize : json.phones.rows[i].ScreenSize,
	resolution : json.phones.rows[i].Resolution,
	memory : json.phones.rows[i].Memory,
	storage : json.phones.rows[i].Storage,
	battery : json.phones.rows[i].Battery,
	rearCam : json.phones.rows[i].RearCam,
	frontCam : json.phones.rows[i].FrontCam,
	desc : json.phones.rows[i].Description,
	searchFilter: json.phones.rows[i].Title
	
});

//creates a searchBar for the tabel
var searchBar = Ti.UI.createSearchBar({
	showCancel: true,
	hintText: "Search for a Phone"
});

//adds the image and lables to the row
row.add(img);
row.add(title);
row.add(price);

//pushis the row information into the data array
data.push(row);

//creates an imageView with the phones image and json data in it
var gridImg = Ti.UI.createImageView({
	image: json.phones.rows[i].Image,
	top: 5,
	height:120,
	align: "center",
	name : json.phones.rows[i].Title,
	image : json.phones.rows[i].Image,
	price : json.phones.rows[i].Price,
	os : json.phones.rows[i].OS,
	screenSize : json.phones.rows[i].ScreenSize,
	resolution : json.phones.rows[i].Resolution,
	memory : json.phones.rows[i].Memory,
	storage : json.phones.rows[i].Storage,
	battery : json.phones.rows[i].Battery,
	rearCam : json.phones.rows[i].RearCam,
	frontCam : json.phones.rows[i].FrontCam,
	desc : json.phones.rows[i].Description
});
	
//creates a label for the name of the phone and all the json data in it
var gridTitle = Ti.UI.createLabel({
	text: json.phones.rows[i].Title,
	align: "center",
	top: gridImg.top + gridImg.height,
	font: {fontSize: 14, fontFamily: "Arial"},
	name : json.phones.rows[i].Title,
	image : json.phones.rows[i].Image,
	price : json.phones.rows[i].Price,
	os : json.phones.rows[i].OS,
	screenSize : json.phones.rows[i].ScreenSize,
	resolution : json.phones.rows[i].Resolution,
	memory : json.phones.rows[i].Memory,
	storage : json.phones.rows[i].Storage,
	battery : json.phones.rows[i].Battery,
	rearCam : json.phones.rows[i].RearCam,
	frontCam : json.phones.rows[i].FrontCam,
	desc : json.phones.rows[i].Description
});

//creates a lable for the price and all the json data in it
var gridPrice = Ti.UI.createLabel({
	text: json.phones.rows[i].Price,
	align: "center",
	top: gridTitle.top + 20,
	font: {fontSize: 12, fontFamily: "Arial"},
	name : json.phones.rows[i].Title,
	image : json.phones.rows[i].Image,
	price : json.phones.rows[i].Price,
	os : json.phones.rows[i].OS,
	screenSize : json.phones.rows[i].ScreenSize,
	resolution : json.phones.rows[i].Resolution,
	memory : json.phones.rows[i].Memory,
	storage : json.phones.rows[i].Storage,
	battery : json.phones.rows[i].Battery,
	rearCam : json.phones.rows[i].RearCam,
	frontCam : json.phones.rows[i].FrontCam,
	desc : json.phones.rows[i].Description
});

//creates a view to hold the image and lables for the grid view
var gridView = Ti.UI.createView({
	height: size,
	width: size,
	backgroundColor: "#ddd",
	hasChild: "true",
	name : json.phones.rows[i].Title,
	image : json.phones.rows[i].Image,
	price : json.phones.rows[i].Price,
	os : json.phones.rows[i].OS,
	screenSize : json.phones.rows[i].ScreenSize,
	resolution : json.phones.rows[i].Resolution,
	memory : json.phones.rows[i].Memory,
	storage : json.phones.rows[i].Storage,
	battery : json.phones.rows[i].Battery,
	rearCam : json.phones.rows[i].RearCam,
	frontCam : json.phones.rows[i].FrontCam,
	desc : json.phones.rows[i].Description
	
});

//adds the image and lables to the view
gridView.add(gridImg);
gridView.add(gridTitle);
gridView.add(gridPrice);

//adds the view to the container
gridContainer.add(gridView);
};

//creates a table the data input and the search bar
var table = Ti.UI.createTableView({
	data:data,
	search: searchBar,
	filterAttribute: "searchFilter"
});

//adds the table to the tableWindow
tableWindow.add(table);

//creates newPhone function
var newPhone = function (e){
	console.log(e.row.image);
	//creates a new window
	var newPhoneWindow = Ti.UI.createWindow({
		title: e.row.name,
		backgroundColor: "#ddd"
	});
	//creates a new image
	 largeImage = Ti.UI.createImageView({
		image:e.row.image,
		title: e.row.name,
		height: 250,
		top: 20
	});

	//adds all the information in a lable
	var phoneInfo = Ti.UI.createLabel({
		top: largeImage.top + largeImage.height + 45,
		left: 20,
		text: e.row.price + "\n" + e.row.os + "\n" + e.row.screenSize + "\n" + e.row.resolution
		+ "\n" + e.row.memory + "\n" + e.row.storage + "\n" + e.row.battery + "\n" + e.row.rearCam
		+ "\n" + e.row.frontCam
	});
	//adds the discription in a label
	var descript = Ti.UI.createLabel({
		top: 550,
		left: 30,
		right: 30,
		text: e.row.desc
	});
	
	//creates a scrollView container
	var container = Ti.UI.createScrollView({
		left: 0,
		right: 10,
		showVerticalScrollIndicator: true
	});
	
	//opens the new window and adds the information into it
	navWindow.openWindow(newPhoneWindow);
	newPhoneWindow.add(container);
	container.add(largeImage);
	container.add(phoneInfo);
	container.add(descript);
	
	//when the largeImage is clicked
	largeImage.addEventListener("click", function(e){
	console.log(e);
	
	//create a new window
	var fullPhoneWindow = Ti.UI.createWindow({
		title: e.source.title,
		backgroundColor: "#ddd"
	});
	
	//create a fullsize image
	fullImage = Ti.UI.createImageView({
		image:e.source.image,
		height: "100%"
	});
	//open the window and add the image to it
	navWindow.openWindow(fullPhoneWindow);
	fullPhoneWindow.add(fullImage);
});
};

//when the table is clicked run the newPhone function
table.addEventListener("click", newPhone);

//when the gridContainer is clicked
gridContainer.addEventListener("click", function(e){
	console.log(e.source.name);
	//create a new window
	var gridPhoneWindow = Ti.UI.createWindow({
		title: e.source.name,
		backgroundColor: "#ddd"
	});
	//create a new image
	 largeImage = Ti.UI.createImageView({
		image:e.source.image,
		title: e.source.name,
		height: 250,
		top: 20
	});

	//create a lable for all the data
	var phoneInfo = Ti.UI.createLabel({
		top: largeImage.top + largeImage.height + 45,
		left: 20,
		text: e.source.price + "\n" + e.source.os + "\n" + e.source.screenSize + "\n" + e.source.resolution
		+ "\n" + e.source.memory + "\n" + e.source.storage + "\n" + e.source.battery + "\n" + e.source.rearCam
		+ "\n" + e.source.frontCam
	});
	//create a lable for the description
	var descript = Ti.UI.createLabel({
		top: 550,
		left: 30,
		right: 30,
		text: e.source.desc
	});
	//create a scroll view container
	var container = Ti.UI.createScrollView({
		left: 0,
		right: 10,
		showVerticalScrollIndicator: true
	});
	
	//open the new window and add the image and lables to it
	navWindowTwo.openWindow(gridPhoneWindow);
	gridPhoneWindow.add(container);
	container.add(largeImage);
	container.add(phoneInfo);
	container.add(descript);
	
	//when the image is clicked
	largeImage.addEventListener("click", function(e){
	console.log(e);
	
	//create a new window
	var fullPhoneWindow = Ti.UI.createWindow({
		title: e.source.title,
		backgroundColor: "#ddd"
	});
	
	//create a full sized image
	fullImage = Ti.UI.createImageView({
		image:e.source.image,
		height: "100%"
	});
	//open the window and add the image to it
	navWindowTwo.openWindow(fullPhoneWindow);
	fullPhoneWindow.add(fullImage);
});
});


//open the navigation window
navWindow.open();
