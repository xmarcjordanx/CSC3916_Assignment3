var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
const MovieSchema = new mongoose.Schema({
    title: {type: String, required: true, index: true},
    releaseDate: Date,
    genre: {
        type: String,
        enum:[
            'Action','Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Western', 'Science Fiction'
        ],
    },
    actors: [{
        actorName: String,
        characterName: String,
    }],
});

const Movie = mongoose.model('Model', MovieSchema);

  // const movies = [
  //   {
  //     title: 'Donnie Darko',
  //     releaseDate: "2001",
  //     genre: 'Drama',
  //     actors: [
  //       { actorName: 'Jake Gyllenhaal', characterName: 'Donnie Darko' },
  //     ],
  //   },
  //   {
  //     title: 'The Matrix',
  //     releaseDate: "1999",
  //     genre: 'Science Fiction',
  //     actors: [
  //       { actorName: 'Keanu Reaves', characterName: 'Neo' },
  //     ],
  //   },
  //   {
  //     title: 'Pulp Fiction',
  //     releaseDate: "1994",
  //     genre: 'Crime',
  //     actors: [
  //       { actorName: 'John Travolta', characterName: 'Vincent Vega' },
  //     ],
  //   },
  //   {
  //     title: 'Primal Fear',
  //     releaseDate: "1996",
  //     genre: 'Thriller',
  //     actors: [
  //       { actorName: 'Richard Gere', characterName: 'Martin Vail' },
  //       { actorName: 'Edward Norton', characterName: 'Aaron Stampler' },
  //     ],
  //   },
  //   {
  //     title: 'Fight Club',
  //     releaseDate: "1999",
  //     genre: 'Drama',
  //     actors: [
  //       { actorName: 'Brad Pitt', characterName: 'Tyler Durden' },
  //       { actorName: 'Edward Norton', characterName: 'The Narrator' },
  //     ],
  //   },
  // ];
  
  // movies.forEach(movieData => {
  //   const movie = new Movie(movieData);
  //   movie.save()
  //     .then(() => console.log(`Saved ${movie.title}`))
  //     .catch(err => console.error(`Error saving ${movie.title}`, err));
  // });

// return the model
module.exports = mongoose.model('Movie', MovieSchema);
module.exports = Movie;var mongoose = require('mongoose');