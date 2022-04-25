import CabDetails from '../models/CabDetails.js'

export const getCabs = async (req, res) => {
    try {
        const cabDetails = await CabDetails.find().sort({ cabID: -1 });

        res.status(200).json(cabDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postCab = async (req, res) => {
    const cab = req.body; 

    const newCab = new CabDetails({ ...cab, cabCreator: req.userId, cabCreatedAt: new Date().toISOString() });
    try {
        await newCab.save();
        res.status(201).json(newCab);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCab = async (req, res) => {
    const { id: cID } = req.params;
    const cab = req.body;
    const existCheck = await CabDetails.exists({ cabID: cID });
    if (!existCheck) {
        return res.status(404).send('No Cab with that ID');
    } else {
        const selectedCab = await CabDetails.find({cabID: cID}).select('_id');
        const updatedCab = await CabDetails.findByIdAndUpdate(selectedCab, { ...cab, cabCreator: req.userId, cabCreatedAt: new Date().toISOString() }, { new: true });
        res.json(updatedCab);
    }
}

export const deleteCab = async (req, res) => {
    const { id: cID } = req.params;
    const existCheck = await CabDetails.exists({ cabID: cID });
    if (!existCheck) {
        return res.status(404).send('No Cab with that ID');
    } else {
        const selectedCab = await CabDetails.find({cabID: cID}).select('_id');
        await CabDetails.findByIdAndRemove(selectedCab);
        res.json({ message: 'Post Deleted successfully' });
    }
}