const { Router } = require("express");
const {getAllVideoGamesHandler, getGamesByNameHandler, postVideoGameCreate} =require('../handlers/getVideoGamesHandler')
const getVideoGamesByID =require('../handlers/getVideoGamesByIdHandler')
const videogamesRouter = Router();

videogamesRouter.get('/videogames',getAllVideoGamesHandler );
videogamesRouter.get('/videogames/:idVideogame',getVideoGamesByID );
videogamesRouter.get('/videogames/name' , getGamesByNameHandler);
videogamesRouter.post('/postvideogames',postVideoGameCreate );

module.exports = videogamesRouter; 


