import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    cartID: String,
	cartCategory: String,
	cartCreatedAt: { type: Date, default: new Date() },

	cabID: String,
	driverName: String,
	carModel: String,
	driverLanguages: [String],
	driverExperience: Number,
	driverAge: Number,
	driverAvailability : [String],
	driverCost: Number,
	driverLocation: String,

	guideID: String,
	guideName: String,
	guideLanguages: [String],
	guideExperience: Number,
	guideAge: Number,
	guideAvailability : [String],
	guideCost: Number,
	guideLocation: String,
	
	packID: String,
	packName: String,
	packCost: Number,

	ticketID: String,
	ticketType: String,
	departure: String,
	destination: String,
	seatsAvailable: Number,
	date: String,
	time: String, 
	ticketCost: Number,

	hotelID: String,
	hotelName: String,
	hotelDetails: String,
	roomID: String,
	roomType: String,
	facilities: [String],
    roomAvailability : [String],
	roomCost: Number
});

const CartDetail = mongoose.model('CartDetail', cartSchema);

export default CartDetail;