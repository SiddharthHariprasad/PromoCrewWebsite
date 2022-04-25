import GuideDetails from '../models/GuideDetails.js'

export const getGuides = async (req, res) => {
    try {
        const guideDetails = await GuideDetails.find().sort({ guideID: -1 });

        res.status(200).json(guideDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postGuide = async (req, res) => {
    const guide = req.body; 

    const newGuide = new GuideDetails({ ...guide, guideCreator: req.userId, guideCreatedAt: new Date().toISOString()});
    try {
        await newGuide.save();
        res.status(201).json(newGuide);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateGuide = async (req, res) => {
    const { id: gID } = req.params;
    const guide = req.body;
    const existCheck = await GuideDetails.exists({ guideID: gID });
    if (!existCheck) {
        return res.status(404).send('No Guide with that ID');
    } else {
        const selectedGuide = await GuideDetails.find({guideID: gID}).select('_id');
        const updatedGuide = await GuideDetails.findByIdAndUpdate(selectedGuide, { ...guide, guideCreator: req.userId, guideCreatedAt: new Date().toISOString()}, { new: true });
        res.json(updatedGuide);
    }
}

export const deleteGuide = async (req, res) => {
    const { id: gID } = req.params;
    const existCheck = await GuideDetails.exists({ guideID: gID });
    if (!existCheck) {
        return res.status(404).send('No Guide with that ID');
    } else {
        const selectedGuide = await GuideDetails.find({guideID: gID}).select('_id');
        await GuideDetails.findByIdAndRemove(selectedGuide);
        res.json({ message: 'Post Deleted successfully' });
    }
}