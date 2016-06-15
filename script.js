var data = {
  "quotes": [
    {"quote": "it's always sunny in philadelphia"},
    {"quote": "yes, it is"}
  ]
}

var button = $('button');

button.on("click", function(){
  var number = $('input').val();
  console.log(number);
})
