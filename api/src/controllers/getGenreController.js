const axios = require('axios');
const { Genre } = require('../db');

const getGenresController = async () => {
    try {
        
        const genresFromDB = await Genre.findAll();
        
        if (genresFromDB.length === 0) {

            const response = await axios.get('https://api.rawg.io/api/genres');

            const genresFromApi = response.data.results;

            // Guardar cada género en la base de datos
            for (let genre of genresFromApi) {
                await Genre.create({ name: genre.name }); 
            }
            
            return res.status(200).json({ message: 'Géneros guardados en la base de datos.' });
        } else {
            
            return res.status(200).json(genresFromDB);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
module.exports = getGenresController;