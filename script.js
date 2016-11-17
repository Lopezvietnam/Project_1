//Sean Lopez
//Project 1: Random Quote Generator 
//Treehouse Techdegree :Fullstack JavaScript 
//github.com/Lopezvietnam/Project_1
//compatible in Chrome, Firefox



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//An array literal contains objects  
var quotes = [
  {
//Each object contains two properties
    quote : "If opportunity doesn't knock, build a door",//property (1) is a string of text
    source: "Milton Berle",//property (2) is a string of text 
  },
  {
    quote : "The best argument against democracy is a five-minute conversation with the average voter",
    source: "Winston Churchill",
  },
  {
    quote : "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves",
    source: "Abraham Lincoln",
  },
  {
    quote : "Work on your own salvation. Do not depend on others.",
    source: "Buddha", 
  },
  {
    quote : "We must accept finite disappointment, but never lose infinite hope",
    source: "Martin Luther King,Jr ",
  },
  {
    quote : "Get your facts first, then you can distort them as you please.",
    source: "Mark Twain",
  }
];

//This is a function which calls a random quote from the array then returns the random quote
function getRandomQuote() {
//The function math.floor returns a value of math.random which rounds that number down to its nearest integer, and the multipy operator ensures all objects of the array are returned 
  var random = Math.floor(Math.random() * quotes.length);//will call all quotes from the array//
  return quotes[random];
 }


//Calls the quote from the previous function and stores it in the variable
function printQuote() { //This function outputs the quote objects
    var randomQuote = getRandomQuote();  //this variable stores random quote
    var quote = "<p class='quote'>"+ randomQuote.quote +"</p>";// assigns a class 
        quote += "<p class='source'>"+ randomQuote.source + "</p>";
    document.getElementById('quote-box').innerHTML = quote;
}


