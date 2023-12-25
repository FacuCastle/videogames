const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.API_KEY;
const { Videogame, Genre } =require('../db')

const getGamesByIdController = async (id) => {
    try {
      let videogame = await Videogame.findByPk(id, {
            include: [Genre] 
        });

      if(!videogame) {
        
      const gameId = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?api_key=${apiKey}`);
      
      const videogameFromApi = gameId.data;

      const genreFromApi = videogameFromApi.genres; 

       videogame = {
        ...dataFromApi,
        genres: genreFromApi
      };
      }
 

      res.status(200).json(videogame);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
  module.exports = getGamesByIdController;