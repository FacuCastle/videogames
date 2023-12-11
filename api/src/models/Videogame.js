const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING, // Puedes considerar usar DataTypes.ARRAY(DataTypes.STRING) si un juego puede estar en múltiples plataformas
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL, 
      allowNull: false,
    },
  })};
  
 
 