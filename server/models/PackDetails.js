import mongoose from 'mongoose';

const packSchema = mongoose.Schema({
    packID: String,
	packName: String,
	ticketID: String,
	hotelID: String,
	roomID: String,
	cabID: String,
	guideID: String,
	packPhoto: String,
	packCost: Number,
	packCreatorName: String,
	packCreator: String,
	packCreatedAt: { type: Date, default: new Date() }
});

const PackDetail = mongoose.model('PackDetail', packSchema);

export default PackDetail;