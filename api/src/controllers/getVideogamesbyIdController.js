const axios = require('axios');
require('dotenv').config();
 const {apiKey} = process.env.APY_KEY;

const getVideoGamesById = async (req, res) => {
    const { idVideogame } = req.params;

    try {
     
      const gameId = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?api_key=${apiKey}`);
      const videogameFromApi = gameId.data;

    
      const genreId = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?api_key=${apiKey}`);
      const genreFromApi = genreId.data.genres; 

 
      const result = {
        ...videogameFromApi,
        genres: genreFromApi,
      };

      res.status(200).json(result);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
  module.exports = getVideoGamesById