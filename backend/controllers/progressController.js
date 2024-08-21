// backend/controllers/progressController.js
import Progress from '../models/Progress.js';

export const getProgressByUserId = async (req, res) => {
  try {
    const progress = await Progress.findOne({ where: { userId: req.params.userId } });
    if (!progress) return res.status(404).json({ message: 'Progress not found' });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    const { progress } = req.body;
    const [updated] = await Progress.update({ progress }, { where: { userId } });
    if (!updated) return res.status(404).json({ message: 'Progress not found' });
    res.json({ message: 'Progress updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
