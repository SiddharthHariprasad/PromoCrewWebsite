import mongoose from 'mongoose';

const guideSchema = mongoose.Schema({
    guideID: String,
	guideName: String,
	guideLanguages: [String],
	guideExperience: Number,
	guideAge: Number,
	guidePhoto: String,
	guideAvailability : [String],
	guideCost: Number,
	guideLocation: String,
	guideCreatorName: String,
	guideCreator: String,
	guideCreatedAt: { type: Date, default: new Date() }
});

const GuideDetail = mongoose.model('GuideDetail', guideSchema);

export default GuideDetail;