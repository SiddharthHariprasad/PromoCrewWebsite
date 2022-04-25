import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
    ticketID: String,
	ticketType: String,
	departure: String,
	destination: String,
	seatsAvailable: Number,
	date: String,
	time: String, 
	ticketCost: Number,
	ticketCreatorName: String,
	ticketCreator: String,
	ticketCreatedAt: { type: Date, default: new Date() }
});

const TicketDetail = mongoose.model('TicketDetail', ticketSchema);

export default TicketDetail;