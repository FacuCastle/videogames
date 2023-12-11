const { Router } = require("express");

const videogamesRouter = Router();

videogamesRouter.get('/videogames');
videogamesRouter.get('/videogames/:idVideogame');
videogamesRouter.post('/videogames');