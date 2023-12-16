const {Videogame} = require('../db')
const getAllVideoGamescontrollers =require('../controllers/getAllVideoGamesController')
const getVideoGamesHandler = async (req, res) => {
    try {

      const result = await getAllVideoGamescontrollers();
  
      res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
  const postVideoGameCreate =  async (req, res) => {
    const { name, description, platforms, image, releaseDate, rating } = req.body;
    try {
      const newVideogame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        releaseDate,
        rating,
      });
      res.status(200).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
  module.exports = {
    postVideoGameCreate,
    getVideoGamesHandler,
  };