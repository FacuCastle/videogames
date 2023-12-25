const {Videogame} = require('../db')

const postVideoGameCreateController =  async (name, description, platforms, image, releaseDate, rating) => {
    try {
      const newVideoGame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        releaseDate,
        rating,
      });
      res.status(200).json(newVideoGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
  module.exports = postVideoGameCreateController;