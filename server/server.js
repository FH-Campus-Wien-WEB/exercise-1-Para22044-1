const express = require('express')
const path = require('path');
const { title } = require('process');
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
    title: "The Thing",
    runtime: "1h 49m",
    released: "6/25/1982",
    genres: ["Horror", "Mystery", "Sci-Fi"],
    plot: "A research team in Antarctica is hunted by a shape-shifting alien that assume the appearance of its victims.",
    director: ["John Carpenter"],
    writers: ["Bill Lancaster", "John W. Campbell Jr."],
    actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
    poster: "/the_thing.jpg.avif"
    },
    {
    title: "Inception",
    runtime: "2h 28m",
    released: "7/16/2010",
    genres: ["Action", "Adventure", "Sci-Fi"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    director: ["Christopher Nolan"],
    writers: ["Christopher Nolan"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
    title: "The Matrix",
    runtime: "2h 16m",
    released: "3/31/1999",
    genres: ["Action", "Sci-Fi"],
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: ["Lana Wachowski", "Lilly Wachowski"],
    writers: ["Lana Wachowski", "Lilly Wachowski"],
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    poster: "/matrix.jpeg.webp"
    }
  ]
  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

