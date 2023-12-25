const getGenresController =require('../controllers/getGenreController')

const getGenresHandler =async (req, res) => {
    try {
        
        const genresHandler = await getGenresController();
        
        if (genresHandler.length > 0) {
            return res.status(200).json(genresHandler);
        }
  
        return res.status(404).json({ message:'No hay Generos'}) 
    
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
module.exports = getGenresHandler;