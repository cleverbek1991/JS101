console.log("hello cohort");

var	greeting = "You Look Terrific!";
console.log(greeting);

var hoursInYear = 24 * 365;
console.log("hoursInYear", hoursInYear);

var minsInDecade = (hoursInYear * 60) * 10;
console.log("minsInDecade", minsInDecade);

var age = 8;
var secondsInYear = (hoursInYear * 60) * 60;
var ageInSeconds = secondsInYear * age;
console.log("ageInSeconds", ageInSeconds);

var veryWiseAge = 35;
if (age > veryWiseAge) {
	console.log("You Are Very Wise");
} else if (age === 8) {
	console.log("You Are at a Magical Age");
} else if (age < veryWiseAge) {
	console.log("You Are Young");
}

var myNumber = 1;
var myOtherNumber = "2";
console.log(myNumber * myOtherNumber);

console.log("The Day Is " + "Wet");

var myJunkDrawer = [3, "dime", "sock", true, null, "28", "box of smth"];
console.log("myJunkDrawer", myJunkDrawer);
console.log("howMany", myJunkDrawer.length);
console.log("first item", myJunkDrawer[0]);

var mySong = {};
mySong.title = "Welcome to the Jungle";
mySong.artist = "Guns and Roses";
mySong.awards = ["first", "second", "Third"];
console.log("mySong", mySong);
