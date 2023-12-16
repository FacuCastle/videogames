const {Videogame} =require('../db')
const axios =require('axios')
require('dotenv').config();
 const {apiKey} = process.env.APY_KEY;

const getAllVideoGamescontrollers = async (req, res) => {
   try {
      // Hacer la solicitud a la API para obtener todos los videojuegos
      const response = await axios.get('https://api.rawg.io/api/games');
      const videogamesFromApi = response.data.results;

      // Procesar y enviar los videojuegos obtenidos de la API
      res.json(videogamesFromApi);
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
   const videogames = await Videogame.findAll()
}
module.exports= getAllVideoGamescontrollers;