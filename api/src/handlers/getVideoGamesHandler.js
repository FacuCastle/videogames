const {Videogame} = require('../db')

const getVideogamesHandler = async (req, res) => {
    try {
      // Consultar todos los videojuegos desde la base de datos
      const videogames = await Videogame.findAll();
  
      // Enviar la respuesta en formato JSON
      res.status(200).json(videogames);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
  module.exports = getVideogamesHandler;