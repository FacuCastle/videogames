const axios =require('axios')
require('dotenv').config();
const apiKey = process.env.APY_KEY;

const getAllGamesControllers = async () => {
   
      
     const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`);
      
     const videogamesFromApi = response.data.results;

      
      return videogamesFromApi;
      
}

const getGamesByNameController = async(name) => {
  const gamesFromDB = await Videogame.findAll({
    where: {
        name: {
            [Sequelize.Op.iLike]: `%${name}%`
        }
    },
    limit: 15
});

if (gamesFromDB.length > 0) {
    return gamesFromDB;
}
const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&search=${name}&page_size=15`);
return response.data.results;

}
module.exports= {
  getAllGamesControllers,
  getGamesByNameController,
};