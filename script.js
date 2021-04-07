
var number;
var calcButton = document.getElementById('half-button');
var signButton = document.getElementById('fortune-button');
var horoscopeStyle = document.getElementById('horoscope');
var sign;
var chosenHoroscope;
var fontSizes;
var fontColor;
var fontFamilys;

var sizes = [12, 20, 48, 56, 72];
var family = ["cursive", "fantasy", "monospace", "serif", "sans-serif"];
var colors = ["#ff0000", "#008000", "#0000ff", "#4b0082"]

//i dont know why i did this to myself......... for astrology ig lol
//im a cancer btw (aquarius moon, leo rising)
var aries = ["Aries, the mountain summit is in sight. This week, hard work gets you to the top.",
"The keyword for this week is opportunity. Aries, it's like the harvest time has come early.",
"You're flying high this week as projects and plans are going smoothly. But Aries, watch out for the landing at the end of the week."];
var taurus = ["This week, tenacity is key. Taurus, being patient is what wins you rewards.",
"Taurus, there's an abundance of choices for you this week. There is positive energy in several directions.",
"Taurus, you could be a productive machine this week. Watch out for a monkey wrench in the works as the week comes to an end."];
var gemini = ["Gemini, the best advice is to read the instructions before proceeding. This week, it will save you time and effort.",
"This week, many roads lead to success. Gemini, you have your choice of how to get there.",
"Others may be cheering for you this week. But don't take it for granted, Gemini, at the end of the week, there could be crickets."];
var cancer = ["Cancer, this week, you may be offered something you didn't know you needed.",
"Cancer, there are easy ways around obstacles this week. The signs will be clear.",
"Cancer, you make an impressive showing this week. But there's no time to rest on your laurels."];
var leo = ["Leo, this week, giving something up for someone else brings you much more than you expect.",
"This week, many are there to lend a helping hand. Leo, assistance is here.",
"All eyes are on you this week, Leo, as you have the answers. But at the end of the week, you could bite off more than you can chew."];
var virgo = ["Virgo, a physical issue could disappear. This week, you get the help you need.",
"Virgo, incremental improvements are really paying off. This week, you're working your way to success.",
"Virgo, this week, you have a golden ticket to opportunities. But don't wait too long to cash it in."];
var libra = ["This week, taking on too much responsibility will just drain your energy. Libra, pace yourself.",
"This week, people are lining up to help you. Libra, your dance card could be full.",
"Others hold the door open for you this week. But by the end of the week, you might have to push open your own door."];
var scorpio = ["Scorpio, you may be looking to free yourself from other people's constant demands. This week, you just have to say no.",
"Scorpio, there are several opportunities for you this week, especially related to your work.",
"Scorpio, you're highly effective this week, blazing through your list of things to do. But by the end of the week, you could run out of steam."];
var sag = ["This week, the contingency plans you have come in handy. Sagittarius, you are prepared.",
"This week, Sagittarius, you have more than one road to take to get to where you want to go.",
"You can have a lot of fun this week, Sagittarius. But toward the end of the week, you want to rein in those wild horses."];
var capricorn = ["Capricorn, you're an expert at operating within a restricted framework. This week, others are impressed.",
"Capricorn, this week, doors open easily for you the first time you knock.",
"Capricorn, you could be finishing up several important projects this week. But check your notes twice, so you don't miss anything."];
var aquarius = ["This week, you get the gratification of seeing progress on a treasured goal. Aquarius, your effort is paying off.",
"This week, you see possibilities. Aquarius, the law of attraction is working for you.",
"Aquarius, you're quite popular this week. Everyone wants to speak to you. Though at the end of the week, someone may give you the cold shoulder."];
var pisces = ["Pisces, this week, it's good to enjoy the process as you may have to do something over and over.",
"Pisces, this week, as you move toward obstacles, they dissolve before your eyes.",
"Financial success is possible this week. But Pisces, be careful, or you will end up spending the extra you receive."];

var randomHoroscope = Math.floor(Math.random() * 3);
var randomSize = Math.floor(Math.random() * 5);
var randomFamilys = Math.floor(Math.random() * 5);
var randomColor = Math.floor(Math.random() * 4);
signButton.addEventListener("click", fortune);
calcButton.addEventListener("click", halfNumber);

function halfNumber(){
number = document.getElementById('half-input').value;
alert("Half of " + number + " is " + number / 2);
console.log("Half of " + number + " is " + number / 2);
}

function restyle(){
fontSizes = sizes[randomSize];
fontFamilys = family[randomFamilys];
fontColor = colors[randomColor];
horoscopeStyle.style.fontSize = fontSizes + "pt";
horoscopeStyle.style.color = fontColor;
horoscopeStyle.style.fontFamily = fontFamilys;
}

function fortune(){
sign = document.getElementById('fortune-input').value;
if (sign == "Aries" || sign == "aries"){
chosenHoroscope = aries[randomHoroscope];
}
else if (sign == "Taurus" || sign == "taurus"){
chosenHoroscope = taurus[randomHoroscope];
}
else if (sign == "Gemini" || sign == "gemini"){
chosenHoroscope = gemini[randomHoroscope];
}
else if (sign == "Cancer" || sign == "cancer"){
chosenHoroscope = cancer[randomHoroscope];
}
else if (sign == "Leo" || sign == "leo"){
chosenHoroscope = leo[randomHoroscope];
}
else if (sign == "Virgo" || sign == "virgo"){
chosenHoroscope = virgo[randomHoroscope];
}
else if (sign == "Libra" || sign == "libra"){
chosenHoroscope = libra[randomHoroscope];
}
else if (sign == "Scorpio" || sign == "scorpio"){
chosenHoroscope = scorpio[randomHoroscope];
}
else if (sign == "Sagittarius" || sign == "sagittarius" || sign == "Sag" || sign == "sag"){
chosenHoroscope = sag[randomHoroscope];
}
else if (sign == "Capricorn" || sign == "capricorn" || sign == "Cap" || sign == "cap"){
chosenHoroscope = capricorn[randomHoroscope];
}
else if (sign == "Aquarius" || sign == "aquarius"){
chosenHoroscope = aquarius[randomHoroscope];
}
else if (sign == "Pisces" || sign == "pisces"){
chosenHoroscope = pisces[randomHoroscope];
}
else{
chosenHoroscope="You did not enter an astrological sign. Your future is uncertain.";
}

document.getElementById("horoscope").innerHTML = chosenHoroscope;
restyle();
}
