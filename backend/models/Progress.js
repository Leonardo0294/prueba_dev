// backend/models/Progress.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Progress = sequelize.define('Progress', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  progress: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Progress;
