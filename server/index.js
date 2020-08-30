var express = require('express');
var app = express();
const bodyParser = require('body-parser'); //to parse json that comes in the body of the request
// var db = require('./../database/operations.js')

app.use(express.static(__dirname + '/../dist'));

// app.use(bodyParser.json());

// app.get('/games', function(req, res){
//   let player = req.query.player
//   console.log("request done")
//   db.get_plays(player, (results,err) => {
//     if(err){
//       console.log(err)
//     }else{
//       res.send(results);
//     }
//   })
// });
//
//
// app.post('/games', (req, res) => {
//   winner = req.body.winner
//   db.add_plays( winner, (results, err) => {
//     if (err) {console.log(err)}
//     else {res.send(results)}
//   })
// });


app.listen(3004);
