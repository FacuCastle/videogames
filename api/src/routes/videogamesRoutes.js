const { Router } = require("express");
const getVideogamesHandler =require('../handlers/getVideoGamesHandler')
const videogamesRouter = Router();

videogamesRouter.get('/videogames', getVideogamesHandler);
videogamesRouter.get('/videogames/:idVideogame',);
videogamesRouter.post('/videogames',);