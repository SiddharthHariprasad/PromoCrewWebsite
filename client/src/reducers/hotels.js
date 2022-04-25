import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (hotels = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...hotels, action.payload];
        case UPDATE:
            return hotels.map((hotel) => hotel._id === action.payload._id ? action.payload : hotel);
        case DELETE:
            return hotels.filter((hotel) => hotel._id !== action.payload._id);
        default:
            return hotels;
    }
}

export default reducer;