//sets backgroundColor
Titanium.UI.setBackgroundColor('#000');
//imports the json.js file
var json = require("json");

//creates the starting welcome window
var welcomeWindow=Ti.UI.createWindow({
	backgroundColor: "#eee",
	title: "Welcome"
});

//creates the navigation window
var navWindow=Ti.UI.iOS.createNavigationWindow({
	window:welcomeWindow //sets navWindow to the welcomeWindow
});
//lets the navWindow change orientation
navWindow.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
];

//creates a scroll container
var welcomeContainer = Ti.UI.createScrollView({
	showVerticalScrollIndicator: true,
});
//adds the container to the window
welcomeWindow.add(welcomeContainer);

//creates the email label
var emailLabel = Ti.UI.createLabel({
	text: "Email",
	top: 50,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
	
});

//creates the email field
var emailField = Ti.UI.createTextField({
	Top: emailLabel.top+emailLabel.height + 5,
	height: 45,
	width: "90%",
	left:"5%",
	borderWidth: .3,
	hintText: "johndoe@gmail.com",
	paddingLeft: 5,
	backgroundColor: "#fff"
});

//creates the email hint
var emailHint = Ti.UI.createLabel({
	text: "Please enter your Email",
	top: emailField.top+emailField.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates the password label
var passwordLabel = Ti.UI.createLabel({
	text: "Password",
	top: emailHint.top+emailHint.height + 20,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates the password field
var passwordField = Ti.UI.createTextField({
	Top: passwordLabel.top+passwordLabel.height + 5,
	height: 45,
	width: "90%",
	left:"5%",
	borderWidth: .3,
	hintText: "Password",
	paddingLeft: 5,
	passwordMask: true,
	backgroundColor: "#fff"
});

//creates the password hint
var passwordHint = Ti.UI.createLabel({
	text: "Please enter your password",
	top: passwordField.top+passwordField.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//adds event listener to the welcomeWindow to blur the fields when not used
welcomeWindow.addEventListener("click",function(){
	passwordField.blur();
	emailField.blur();
});

//creates the sign in view
var signInView = Ti.UI.createView({
	top: passwordHint.top + passwordHint.height + 50,
	height: 45,
	width: "70%",
	left: "15%",
	backgroundColor: "#383eff"
});

//creates the sign in label
var signInLabel = Ti.UI.createLabel({
	text: "Sign In",
	color: "#fff",
	font: {fontSize:16, fontFamily:"Arial"}
});

//adds label to the view
signInView.add(signInLabel);

//creates the not member label
var notMemberLable = Ti.UI.createLabel({
	top: signInView.top + signInView.height + 80,
	height: 20,
	text: "Not A Member?     Sign Up Now!",
	font: {fontSize: 20, fontFamily: "Arial"}
});

//creates the sign up view
var signUpView = Ti.UI.createView({
	top: notMemberLable.top + notMemberLable.height + 30,
	height: 45,
	width: "70%",
	left: "15%",
	backgroundColor: "#383eff",
	bottom: 50
});

//creates the sign up label
var signUpLabel = Ti.UI.createLabel({
	text: "Sign Up",
	color: "#fff",
	font: {fontSize:16, fontFamily:"Arial"}
});
//adds the label to the view
signUpView.add(signUpLabel);

//adds all the labels, fields and hints to the container
 welcomeContainer.add(emailLabel,emailField,emailHint,passwordLabel,passwordField,
		passwordHint,signInView,notMemberLable,signUpView);
		
		
		
		
		
		
//SignUp Window
		
		
		
//creates the sign up window
var signUpWindow = Ti.UI.createWindow({
	backgroundColor: "#eee",
	title: "Sign Up",
});

//opens signUpWindow when signupView is clicked
signUpView.addEventListener("click", function(){
		navWindow.openWindow(signUpWindow);
});
	
//creates the signUpContainer		
var signUpContainer = Ti.UI.createScrollView({
	showVerticalScrollIndicator: true,
});
//adds container to window
signUpWindow.add(signUpContainer);

//creates firstNameLabel
var firstNameLabel = Ti.UI.createLabel({
	text: "First Name",
	top: 50,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates firstNameField
var firstNameField = Ti.UI.createTextField({
	Top: firstNameLabel.top+firstNameLabel.height + 5,
	height: 45,
	width: "42%",
	left:"5%",
	borderWidth: .3,
	hintText: "John",
	paddingLeft: 5,
	backgroundColor: "#fff"
});

//creates firstNameHint
var firstNameHint = Ti.UI.createLabel({
	text: "Please enter your First Name",
	top: firstNameField.top+firstNameField.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates lastNameLabel
var lastNameLabel = Ti.UI.createLabel({
	text: "Last Name",
	top: 50,
	height: 20,
	width: "42%",
	right: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates lastNameField
var lastNameField = Ti.UI.createTextField({
	Top: lastNameLabel.top+lastNameLabel.height + 5,
	height: 45,
	width: "42%",
	right:"5%",
	borderWidth: .3,
	hintText: "Doe",
	paddingLeft: 5,
	backgroundColor: "#fff"
});

//creates lastnameHint
var lastNameHint = Ti.UI.createLabel({
	text: "Please enter your Last Name",
	top: lastNameField.top+lastNameField.height,
	height: 10,
	width: "42%",
	right: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates emailLabel
var emailLabel = Ti.UI.createLabel({
	text: "Email",
	top: lastNameHint.top+lastNameHint.height + 20,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates emailField2
var emailField2 = Ti.UI.createTextField({
	Top: emailLabel.top+emailLabel.height + 5,
	height: 45,
	width: "90%",
	left:"5%",
	borderWidth: .3,
	hintText: "johndoe@gmail.com",
	paddingLeft: 5,
	backgroundColor: "#fff"
});

//creates emailHint
var emailHint = Ti.UI.createLabel({
	text: "Please enter your Email",
	top: emailField2.top+emailField2.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates birthLabel
var birthLabel = Ti.UI.createLabel({
	text: "Birthday",
	top: emailHint.top+emailHint.height + 20,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates a date to set the picker on
var setValue = new Date();
setValue.setFullYear(1990);
setValue.setMonth(5);
setValue.setDate(15);

//creates birthPicker
var birthPicker = Ti.UI.createPicker({
	Top: birthLabel.top+birthLabel.height + 5,
	width: "90%",
	left:"5%",
	height:220,
	selectionIndicator: true,
	type: Ti.UI.PICKER_TYPE_DATE,
	value: setValue,
	});
	
	//creates birthHint
var birthHint = Ti.UI.createLabel({
	text: "Please select your Birthday",
	top: birthPicker.top+birthPicker.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates passwordLabel
var passwordLabel = Ti.UI.createLabel({
	text: "Password",
	top: birthHint.top+birthHint.height + 20,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates passwordField2
var passwordField2 = Ti.UI.createTextField({
	Top: passwordLabel.top+passwordLabel.height + 5,
	height: 45,
	width: "90%",
	left:"5%",
	borderWidth: .3,
	hintText: "Password",
	paddingLeft: 5,
	passwordMask: true,
	backgroundColor: "#fff"
});

//creates passwordHint
var passwordHint = Ti.UI.createLabel({
	text: "Please enter a password",
	top: passwordField2.top+passwordField2.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates retryPasswordLabel
var retypePasswordLabel = Ti.UI.createLabel({
	text: "Retype Password",
	top: passwordHint.top+passwordHint.height + 20,
	height: 20,
	left: "5%",
	font: {fontSize:20, fontFamily:"Arial"}
});

//creates retypePawwsordField
var retypePasswordField = Ti.UI.createTextField({
	Top: retypePasswordLabel.top+retypePasswordLabel.height + 5,
	height: 45,
	width: "90%",
	left:"5%",
	borderWidth: .3,
	hintText: "Retype Password",
	paddingLeft: 5,
	passwordMask: true,
	backgroundColor: "#fff"
});

//creates retypePasswordHint
var retypePasswordHint = Ti.UI.createLabel({
	text: "Please retype your password",
	top: retypePasswordField.top+retypePasswordField.height,
	height: 10,
	left: "5%",
	font: {fontSize:12, fontFamily:"Arial"}
});

//creates signUpView2
var signUpView2 = Ti.UI.createView({
	top: retypePasswordHint.top + retypePasswordHint.height + 30,
	height: 45,
	width: "70%",
	left: "15%",
	backgroundColor: "#383eff",
	bottom: 50
});

//creates signUpLabel
var signUpLabel = Ti.UI.createLabel({
	text: "Sign Up",
	color: "#fff",
	font: {fontSize:16, fontFamily:"Arial"}
});
//adds the label to the view
signUpView2.add(signUpLabel);

//adds event listener to the signUpWindow to blur the fields when not used
signUpWindow.addEventListener("click",function(){
	firstNameField.blur();
	lastNameField.blur();
	emailField.blur();
	passwordField.blur();
	retypePasswordField.blur();
});

//adds all the labels, fields and hints to the container
signUpContainer.add(firstNameLabel,firstNameField,firstNameHint,lastNameLabel,
	lastNameField,lastNameHint,emailLabel,emailField2,emailHint,birthLabel,birthPicker,
	birthHint,passwordLabel,passwordField2,passwordHint,retypePasswordLabel,
	retypePasswordField,retypePasswordHint,signUpView2);






//raceWindow


//creates the raceWindow
var racesWindow = Ti.UI.createWindow({
	backgroundColor: "#eee",
	title: json.races.title,
});

//when the signInView is clicked open the raceWindow if both fields are filled in
signInView.addEventListener("click", function(){
	if(emailField.hasText()===true&&passwordField.hasText()===true){
		navWindow.openWindow(racesWindow);
	}else{alert("Please Fill In All Fields");//otherwise show alert
	}
});

//when the signUpView2 is clicked open the raceWindow if all fields are filled
signUpView2.addEventListener("click", function(){
	if(firstNameField.hasText()===true&&lastNameField.hasText()===true&&
	emailField2.hasText()===true&&passwordField2.hasText()===true&&
	retypePasswordField.hasText()===true){
		//and if the passwords match each other
		if(passwordField2.value===retypePasswordField.value){
			navWindow.openWindow(racesWindow);
		}else{
			alert("The Two Passwords Do Not Match");//otherwise show alert
		}
	}else{alert("Please Fill In All Fields");//othewise show alert
	}
});

////creates searchBar for the table
var searchBar = Ti.UI.createSearchBar({
	showCancel: true,
	hintText: "Search for title text",
});

//creates raceTable
var racesTable = Ti.UI.createTableView({
	search: searchBar,
	filterAttribute: "searchFilter",
	backgroundColor: "#eee",
});

//creates tableSection
var tableSection = Ti.UI.createTableViewSection({

});

//creates for loop to make the table rows
for(i=0, j=json.races.rows.length; i<j; i++){
	var theRows = Ti.UI.createTableViewRow({
		title: json.races.rows[i].Title,
		location: json.races.rows[i].Location,
		type: json.races.rows[i].Type,
		date: json.races.rows[i].Date,
		registration: json.races.rows[i].Registration,
		desc: json.races.rows[i].Description,
		hasChild: true,
		searchFilter:json.races.rows[i].Title,
	});
	//adds rows to the tableSection
	tableSection.add(theRows);
};

//adds tableSection to the rows
var rows = [tableSection];
//sets rows as the table data
racesTable.setData(rows);

//adds racesTable to the racesWindow
racesWindow.add(racesTable);






//infoWindow


//when a row is clicked opens a new info window
racesTable.addEventListener("click",function(e){
	
	//creates infoWindow
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "#eee",
		title: e.source.title
	});
	//opens infoWindow
	 navWindow.openWindow(infoWindow);
	
	//creates a scroll view container
	var infoContainer = Ti.UI.createScrollView({
	showVerticalScrollIndicator: true,
});
	
	//adds infoContainer to the infoWindow
	infoWindow.add(infoContainer);
	
	//creates titleLabel
	var titleLabel = Ti.UI.createLabel({
	text:e.source.title,
	textAlign: "center",
	top: 50,
	font:{fontSize: 24, fontFamily: "Arial"}
	});	
	
	//creates locatainLabel
	var locationLabel = Ti.UI.createLabel({
	text:"Location: " + e.source.location,
	top: titleLabel.top + 100 ,
	left: "5%",
	font:{fontSize: 16, fontFamily: "Arial"}
	});	
	
	//creates typeLabel
	var typeLabel = Ti.UI.createLabel({
	text:"Type: " + e.source.type,
	top: locationLabel.top + 50,
	left: "5%",
	font:{fontSize: 16, fontFamily: "Arial"}
	});	
	
	//creates dataLabel
	var dateLabel = Ti.UI.createLabel({
	text:"Date: " + e.source.date,
	top: typeLabel.top + 50,
	left: "5%",
	font:{fontSize: 16, fontFamily: "Arial"}
	});	
	
	//creates regLabel
	var regLabel = Ti.UI.createLabel({
	text:"Registration: " + e.source.registration,
	top: dateLabel.top + 50,
	left: "5%",
	right: "5%",
	font:{fontSize: 16, fontFamily: "Arial"}
	});	
	
	//creates descriptionLabel
	var descriptionLabel = Ti.UI.createLabel({
	text:e.source.desc,
	top: regLabel.top + 70,
	left: "5%",
	right: "5%",
	font:{fontSize: 16, fontFamily: "Arial"},
	});	
	
	//creates registerView
	var registerView = Ti.UI.createView({
	top: descriptionLabel.top + 150,
	height: 45,
	width: "70%",
	left: "15%",
	backgroundColor: "#383eff",
	bottom: 50
});

//creates registerLabel
var registerLabel = Ti.UI.createLabel({
	text: "Register",
	color: "#fff",
	font: {fontSize:16, fontFamily:"Arial"}
});
//adds label to view
registerView.add(registerLabel);
	
	
//adds the labels and views to the infoContainer
infoContainer.add(titleLabel,locationLabel,typeLabel,dateLabel,regLabel,
	descriptionLabel,registerView);
	
	
	


	
	//thanksWindow
	
	
		//when registerView is clicked open thanksWindow
		registerView.addEventListener("click",function(){
				//creates thanksWindow
				var thanksWindow = Ti.UI.createWindow({
				backgroundColor: "#eee",
				title: "Thank You"
			});
			
			//opens thanksWindow
			navWindow.openWindow(thanksWindow);
			
			//creates thanksLabel
			var thanksLabel = Ti.UI.createLabel({
			text: "Thank You For Registering",
			textAlign: "center",
			font:{fontSize: 24, fontFamily: "Arial"}
			});	
		
		//adds label to the window
		thanksWindow.add(thanksLabel);	
		});
	});
	
//opens the navWindow	
navWindow.open();