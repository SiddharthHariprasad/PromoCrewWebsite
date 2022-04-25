import HotelDetails from '../models/HotelDetails.js'

export const getHotels = async (req, res) => {
    try {
        const hotelDetails = await HotelDetails.find().sort({ hotelID: -1 });

        res.status(200).json(hotelDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postHotel = async (req, res) => {
    const hotel = req.body; 

    const newHotel = new HotelDetails({ ...hotel, hotelCreator: req.userId, hotelCreatedAt: new Date().toISOString() });
    try {
        await newHotel.save();
        res.status(201).json(newHotel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateHotel = async (req, res) => {
    const { id: hID } = req.params;
    const hotel = req.body;
    const existCheck = await HotelDetails.exists({ hotelID: hID });
    if (!existCheck) {
        return res.status(404).send('No Hotel with that ID');
    } else {
        const selectedHotel = await HotelDetails.find({hotelID: hID}).select('_id');
        const updatedHotel = await HotelDetails.findByIdAndUpdate(selectedHotel, { ...hotel, hotelCreator: req.userId, hotelCreatedAt: new Date().toISOString() }, { new: true });
        res.json(updatedHotel);
    }
}

export const deleteHotel = async (req, res) => {
    const { id: hID } = req.params;
    const existCheck = await HotelDetails.exists({ hotelID: hID });
    if (!existCheck) {
        return res.status(404).send('No Hotel with that ID');
    } else {
        const selectedHotel = await HotelDetails.find({hotelID: hID}).select('_id');
        await HotelDetails.findByIdAndRemove(selectedHotel);
        res.json({ message: 'Post Deleted successfully' });
    }
}