import mongoose from 'mongoose';

const hotelSchema = mongoose.Schema({
    hotelID: String,
	hotelName: String,
	hotelDetails: String,
	hotelPhoto: String,
	roomID: String,
	roomType: String,
	facilities: [String],
    roomAvailability : [String],
	roomCost: Number,
	roomPhoto: String,
	hotelCreatorName: String,
	hotelCreator: String,
	hotelCreatedAt: { type: Date, default: new Date() }
});

const HotelDetail = mongoose.model('HotelDetail', hotelSchema);

export default HotelDetail;