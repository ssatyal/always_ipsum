var data = {
  "quotes": [
    {"quote": "RUM HAM! RUM HAM! I'm sorry rum ham! I'm sorry..."},
    {"quote": "The DENNIS System."},
    {"quote": "You gotta pay the troll toll, if you wanna get into that boy's soul."},
    {"quote": "Is your cat making TOO MUCH NOISE ALL THE TIME?"},
    {"quote": "Wildcard, bitches! Yee-haw!"},
    {"quote": "If you're in my room, you're always being filmed."},
    {"quote": "I will eat your babies, bitch!"},
    {"quote": "Dayman, fighter of the Nightman, champion of the sun, you're a master of karate and friendship for everyone."},
    {"quote": "I will SMASH your face into a- into a jelly!"},
    {"quote": "I browned out that evening."},
    {"quote": "Can I stop you, though? You keep using this word \"jabroni.\" And...it's awesome!"},
    {"quote": "I got my Magnum condoms; I got my wad of hundreds. I'm ready to plow."},
    {"quote": "Later, dudes. S you in your A's, don't wear a C and J all over your B's."},
    {"quote": "I'm not gonna be buried in a grave. When I'm dead, just throw me in the trash."},
    {"quote": "I eat stickers all the time, dude!"},
    {"quote": "Who am I supposed to vote for? Am I supposed to vote for the Democrat who's gonna blast me in the ass or the Republican who's blasting my ass? "},
    {"quote": "I'm a...full-on rapist, you know? Uh, Africans, dyslexics, children, that sort of thing. "},
    {"quote": "Fight Milk! The first alcoholic dairy based protein drink for bodyguards!"},
    {"quote": "Cat in the wall, eh?! Okay, now you're talking my language."},
    {"quote": "I'm not fat. I'm cultivating mass."},
    {"quote": "What is this word, spa? I feel like you're starting to a say a word and you're not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?"},
    {"quote": "Oh, get a job? Just get a job? Why don't I strap on my job helmet and squeeze down into a job cannon and fire off into job land, where jobs grow on jobbies?!"},
    {"quote": "This bar runs on trash, dude. This bar is totally green that way."},
    {"quote": "Then, I'll just regress, because I feel I made myself perfectly redundant."},
    {"quote": "Isn't that amazing? You ask to see a woman's breasts on the street, you get slapped. You give her a free t-shirt and videotape it, and the clothes come right off."},
    {"quote": "Hi. Um, I'm a recovering crackhead. This is my retarded sister that I take care of. I'd like some welfare, please."},
    {"quote": "Well, I don't know how many years on this Earth I got left. I'm gonna get real weird with it."},
    {"quote": "Oh, I get it. Cute. You leave this pen here and people are supposed to think, \"Wait, that looks like a dick.\""},
    {"quote": "I'm just saying, based on that story that you just told me, I'm fairly certain that those Santas were running a train on your mom for money."},
    {"quote": "Smoke some cigarettes. The smoke will suffocate the bacteria in your stomach."},
    {"quote": "Grain alcohol, baby! Whenever there's a potential riot, I'm getting blasted on grain alcohol."},
    {"quote": "Yippie-kay-yay, Mr. Falcon!"},
    {"quote": "This is Ham... *soaked* in Rum. It's loaded with booze."},
    {"quote": "What's up, bitches?"},
    {"quote": "When was the last time we played night crawlers together Frank?"},
    {"quote": "'Cause if the girl said \"no\", then the answer obviously is \"no.\" But the thing is, is she's not gonna say \"no.\" She would never say \"no\", because of the implication."},
    {"quote": "I've got a confession: I'm in love with a man. \"What?\" I'm in love with a man. A man called God. Does that make me gay? Am I \"gay for God\"? You betcha."},
    {"quote": "People's Knees."},
    {"quote": "Don't put regular steak, put milk-steak, she'll know what it is."},
    {"quote": "Flip, Flip, Flipadelphia!"},
    {"quote": "Dennis, if I was looking for safe I wouldn't be sticking my dick through a wall."},
    {"quote": "Demonstrate value, Engage physically, Nurture dependence, Neglect emotionally, Inspire hope, Separate entirely."}
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
