// backend/controllers/moduleController.js
import LearningModule from '../models/LearningModule.js';

export const getAllModules = async (req, res) => {
  try {
    const modules = await LearningModule.findAll();
    res.json(modules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getModuleById = async (req, res) => {
  try {
    const module = await LearningModule.findByPk(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.json(module);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
