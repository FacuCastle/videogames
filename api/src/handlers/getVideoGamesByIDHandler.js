const getVideoGamesById = require('../controllers/getVideogamesbyIdController')

const getVideoGamesByID = async (req, res) => {
    const { id } = req.params;
    try {
      const videogame = await getVideoGamesById(id);
      if (!videogame) {
        return res.status(404).json({ error: 'Videojuego no encontrado' });
      }
      res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
  module.exports = getVideoGamesByID;