Ti.UI.setBackgroundColor('#000');

var json = require("json");

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "About Me"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var table = Ti.UI.createTableView({
	
});

if(Ti.Platform.name === "iPhone OS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};


var tableSection = Ti.UI.createTableViewSection({
	headerTitle: json.aboutMe.title,
	footerTitle: json.aboutMe.footer
});

for(i=0, j=json.aboutMe.rows.length; i<j; i++){
	var theRows = Ti.UI.createTableViewRow({
		title: json.aboutMe.rows[i].Title,
		question: json.aboutMe.rows[i].Question,
		answer: json.aboutMe.rows[i].Answer,
		hasChild: true
	});
	tableSection.add(theRows);
};
var rows = [tableSection];
table.setData(rows);


var infoWindowFunction = function(dataSource){
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: dataSource.title
	});
console.log(dataSource);
	navWindow.openWindow(infoWindow);
	
	var Q = Ti.UI.createLabel({
	text:dataSource.question,
	textAlign: "center",
	top: 50,
	left: 15,
	right: 15,
	font:{fontSize: 24, fontFamily: "Arial", fontWeight: "Bold"}
	});	

	var A = Ti.UI.createLabel({
	text:dataSource.answer,
	textAlign: "center",
	top: 175,
	left: 15,
	right: 15,
	font:{fontSize: 24, fontFamily: "Arial"}
	});
	infoWindow.add(Q,A);	
};
		
	
table.addEventListener("click", function(event){
	infoWindowFunction(event.source);
});





mainWindow.add(table);

navWindow.open();
