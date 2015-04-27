/**
 * Created by donaldwhalen on 4/26/15.
 */
var Parse = require('node-parse-api').Parse;
var Converter = require("csvtojson").core.Converter;
var fs = require("fs");
var _ = require('lodash');

var APP_ID = 'jo93rMIrVxwXppPVazfWml5qa1t1VlYCIM1vkZra';
var API_KEY = 'zH48QsmvzzKh9FqdI0yFLeCZPmL9SyFMyA94ZmAk';

var csvFileName = "./movie-barcode-index.csv";
var fileStream = fs.createReadStream(csvFileName);

//new converter instance
var csvConverter = new Converter({constructResult: true});

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed", function (movies) {
  //_.forEach(movies, function(movie, key){
    //console.log(movie, key);`
  staggerRequests(movies);
  //});


});

fileStream.pipe(csvConverter);

var i = 0;                     //  set your counter to 1

function staggerRequests (movies) {           //  create a loop function
  setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    unpackAndSave(movies[i], i)
    i++;                     //  increment the counter
    if (i < movies.length) {            //  if the counter < 10, call the loop function
      staggerRequests(movies);             //  ..  again which will trigger another
    }                        //  ..  setTimeout()
  }, 100)
}


var options = {
  app_id: APP_ID,
  api_key: API_KEY
};
var app = new Parse(options);


var unpackMovieTitle = function (movie) {
  var title         = "";
  var year          = null;
  var year2         = null;
  var isSequence    = false;
  var isCollection  = false;

  try {
    title   = movie.split('(')[0];
    year    = movie.split('(')[1].split(')')[0];

    //year is a range (two years)
    if(year.split('-').length > 1){
      var years     = year.split('-');
      year          = parseInt(years[0]);
      year2         = parseInt(years[1]);
      isCollection  = true;
    }
  } catch (e) {
    //mangled title
    console.log(e);
  }

  year        = isNaN(parseInt(year)) ? 0 : parseInt(year);
  isSequence  = (movie.split('[Sequence').length > 1) ? true : false;
  console.log(title, year, year2, isSequence, isCollection);

  return {
    title         : title,
    year          : year,
    year2         : year2,
    isSequence    : isSequence,
    isCollection  : isCollection
  }
};

var unpackAndSave = function(m, index){
  var movie = unpackMovieTitle(m['movie-links']);
  movie.link = m['movie-links-href'];
  movie.image = m['movie-barcode-image-src'];

  findOrSave(movie, index);



}

var findOrSave = function(m, index){
  app.find('Barcode', {link : m.link}, function(err, response){
    console.log(response, err);
    if(response.results.length > 0){
      //movie exists, skip it
      console.log("Movie Exists");

      // Add missing indecies for random queries
      //if(!!response.results.index){
      //  console.log("Index exists");
      //} else {
        app.update('Barcode', response.results[0].objectId, {index : index}, function(err, response){
          console.log(response);
        });
      //}

    } else {
       app.insert('Barcode', m, function(err, response){
         console.log(response);
       });
    }
  });
}




//
//app.insert('Barcode', {
//  title : 'The Matrix (1999)'
//})
