var data = {
  "quotes": [
    {"quote": "It's always sunny in Philadelphia."},
    {"quote": "Paddy's Pub: home of the original kitten mittens."},
    {"quote": "Rum ham, no!"},
    {"quote": "The DENNIS System."},
    {"quote": "You gotta pay the troll toll, if you wanna get into that boy's soul."},
    {"quote": "Is your cat making TOO MUCH NOISE ALL THE TIME?"},
    {"quote": "Wildcard, bitches! Yee-haw!"},
    {"quote": ""},
    {"quote": "I will eat your babies, bitch!"},
    {"quote": "Dayman, fighter of the Nightman, champion of the sun, you're a master of karate and friendship for everyone."},
    {"quote": "I will SMASH your face into a- into a jelly!"},
    {"quote": "I browned out that evening."},
    {"quote": "Can I stop you, though? You keep using this word \"jabroni.\" And...it's awesome!"},
    {"quote": "I got my Magnum condoms; I got my wad of hundreds. I'm ready to plow."}
    //{"quote": ""},
    //{"quote": ""},
    //{"quote": ""},
  ]
}

var button = $('button');
var quotesHere = $('#quoteshere');
var string = '';

button.on("click", function(){
  var number = $('input').val();
  addSunQuote(number);
  quotesHere.html(string);
})

var addSunQuote = function(number){
  string = '';
  for (var i = 0; i < number; i++){
    var random = Math.floor(Math.random() * data.quotes.length);
    string += (data.quotes[random].quote + ' ');
  } console.log(string);
}
