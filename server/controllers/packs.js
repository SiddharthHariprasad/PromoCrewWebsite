import PackDetails from '../models/PackDetails.js'

export const getPacks = async (req, res) => {
    try {
        const packDetails = await PackDetails.find().sort({ packID: -1 });

        res.status(200).json(packDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postPack = async (req, res) => {
    const pack = req.body; 

    const newPack = new PackDetails({ ...pack, packCreator: req.userId, packCreatedAt: new Date().toISOString() });
    try {
        await newPack.save();
        res.status(201).json(newPack);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePack = async (req, res) => {
    const { id: pID } = req.params;
    const pack = req.body;
    const existCheck = await PackDetails.exists({ packID: pID });
    if (!existCheck) {
        return res.status(404).send('No Pack with that ID');
    } else {
        const selectedPack = await PackDetails.find({packID: pID}).select('_id');
        const updatedPack = await PackDetails.findByIdAndUpdate(selectedPack, { ...pack, packCreator: req.userId, packCreatedAt: new Date().toISOString() }, { new: true });
        res.json(updatedPack);
    }
}

export const deletePack = async (req, res) => {
    const { id: pID } = req.params;
    const existCheck = await PackDetails.exists({ packID: pID });
    if (!existCheck) {
        return res.status(404).send('No Pack with that ID');
    } else {
        const selectedPack = await PackDetails.find({packID: pID}).select('_id');
        await PackDetails.findByIdAndRemove(selectedPack);
        res.json({ message: 'Post Deleted successfully' });
    }
}