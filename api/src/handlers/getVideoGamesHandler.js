
const {getAllGamesControllers, getGamesByNameController } =require('../controllers/getGamesController')
const postVideoGameCreateController =require('../controllers/postVideoGameCreateController')

const getAllVideoGamesHandler = async (req, res) => {
    try {
      console.log('holaaa');
      const games = await getAllGamesControllers();
  
      res.status(200).json(games);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };

  const getGamesByNameHandler = async (req, res) => {
    const { name } = req.query;
  
    try {
        const games = await getGamesByNameController(name);
  
        if (games.length > 0) {
            return res.status(200).json(games);
        }
  
        return res.status(404).json({ message: 'No se encontraron videojuegos con el nombre proporcionado.' });
  
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
      

  const postVideoGameCreate =  async (req, res) => {
    const { name, description, platforms, image, releaseDate, rating } = req.body;
    try {
      const newVideogame = await postVideoGameCreateController(name, description, platforms, image, releaseDate, rating )

      res.status(200).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
  module.exports = {
    postVideoGameCreate,
   getAllVideoGamesHandler,
   getGamesByNameHandler,
  };