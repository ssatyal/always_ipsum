var data = {
  "quotes": [
    {"quote": "It's always sunny in Philadelphia."},
    {"quote": "Paddy's Pub: home of the original kitten mittens."},
    {"quote": "Rum ham, no!"},
    {"quote": "The DENNIS System."},
    {"quote": "You gotta pay the troll toll, if you wanna get into that boy's soul."}
  ]
}

var button = $('button');
var quotesHere = $('#quoteshere');
var string = '';

button.on("click", function(){
  var number = $('input').val();

  console.log(number);
})

var addSunQuote = function(number){
  string = '';
  for (var i = 0; i < number; i++){
    var random = Math.floor(Math.random() * data.quotes.length);
    string += (data.quotes[random].quote + ' ');
  } console.log(string);
}
