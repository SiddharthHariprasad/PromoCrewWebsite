import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (tickets = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...tickets, action.payload];
        case UPDATE:
            return tickets.map((ticket) => ticket._id === action.payload._id ? action.payload : ticket);
        case DELETE:
            return tickets.filter((ticket) => ticket._id !== action.payload._id);
        default:
            return tickets;
    }
}

export default reducer;