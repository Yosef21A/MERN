const Joke = require('../models/joke.model');

module.exports.getJokes = (req, res) => {
    Joke.find()
        .then((jokesList) => {
            res.json({ jokes: jokesList })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.getJokeById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(jokeDetails => {
            res.json({ joke: jokeDetails })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(jokeCreated => {
            res.json({ joke: jokeCreated })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}