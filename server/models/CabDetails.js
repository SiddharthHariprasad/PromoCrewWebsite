import mongoose from 'mongoose';

const cabSchema = mongoose.Schema({
    cabID: String,
	driverName: String,
	carModel: String,
	driverLanguages: [String],
	driverExperience: Number,
	driverAge: Number,
	driverPhoto: String,
	driverAvailability : [String],
	driverCost: Number,
	driverLocation: String,
	cabCreatorName: String,
	cabCreator: String,
	cabCreatedAt: { type: Date, default: new Date() }
});

const CabDetail = mongoose.model('CabDetail', cabSchema);

export default CabDetail;