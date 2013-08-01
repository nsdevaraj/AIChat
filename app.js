var aiml = require('aiml') 
var express = require('express');
var engine;
var app = express();
app.use(express.static(__dirname + '/public'));
var filenames =[ 'aimls/ai.aiml',  'aimls/astrology.aiml', 'aimls/badanswer.aiml', 'aimls/biography.aiml', 'aimls/bot.aiml', 'aimls/bot_profile.aiml', 'aimls/client.aiml', 'aimls/client_profile.aiml', 'aimls/computers.aiml', 'aimls/continuation.aiml', 'aimls/date.aiml', 'aimls/drugs.aiml',  'aimls/food.aiml', 'aimls/geography.aiml', 'aimls/gossip.aiml', 'aimls/history.aiml',  'aimls/imponderables.aiml','aimls/interjection.aiml', 'aimls/iu.aiml', 'aimls/literature.aiml', 'aimls/loebner10.aiml', 'aimls/money.aiml', 'aimls/movies.aiml',  'aimls/religion.aiml', 'aimls/salutations.aiml', 'aimls/science.aiml', 'aimls/sex.aiml', 'aimls/sports.aiml', 'aimls/stories.aiml',  'aimls/music.aiml', 'aimls/numbers.aiml', 'aimls/personality.aiml', 'aimls/phone.aiml', 'aimls/politics.aiml', 'aimls/xfind.aiml',
'aimls/psychology.aiml', 'aimls/pyschology.aiml','aimls/mp0.aiml', 'aimls/mp1.aiml', 'aimls/mp2.aiml', 'aimls/mp3.aiml', 'aimls/primeminister.aiml',

'aimls/default.aiml', 'aimls/knowledge.aiml','aimls/emotion.aiml','aimls/humor.aiml', 'aimls/inquiry.aiml',  'aimls/that.aiml','aimls/update1.aiml', 'aimls/update_mccormick.aiml' ,'aimls/pickup.aiml','aimls/primitive-math.aiml','aimls/wallace.aiml', 'aimls/reduction.names.aiml', 'aimls/reduction0.safe.aiml', 'aimls/reduction1.safe.aiml', 'aimls/reduction2.safe.aiml', 'aimls/reduction3.safe.aiml', 'aimls/reduction4.safe.aiml', 'aimls/reductions-update.aiml'];//'aimls/alice.aiml'
aiml.parseFiles(filenames, function(err, topics){ 
  engine = new aiml.AiEngine('Default', topics, {name: 'Buddy'}); 
});
app.get('/query/:id', function(req, res){  
  var response = engine.reply({name: 'You'}, req.params.id, function(err, response){
         res.send(response);
    });
}); 
app.get("/", function (req, res) { 
    res.redirect("/index.html");
});
var port = 3000;
server = app.listen(port);
console.log('Server listening on port 3000 in %s mode', app.settings.env);