var data = {
  "quotes": [
    {"quote": "it's always sunny in philadelphia"},
    {"quote": "kitten mittens"},
    {"quote": "rum ham"},
    {"quote": "The DENNIS System"}
  ]
}

var button = $('button');
var quotesHere = $('#quoteshere');

button.on("click", function(){
  var number = $('input').val();
  console.log(number);
})

var addSunQuote = function(number){
  for (var i = 0; i < number; i++){
    var random = Math.floor(Math.random() * data.quotes.length);
    console.log(data.quotes[random].quote);
  }
}
