import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (orders = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...orders, action.payload];
        case UPDATE:
            return orders.map((order) => order._id === action.payload._id ? action.payload : order);
        case DELETE:
            return orders.filter((order) => order._id !== action.payload._id);
        default:
            return orders;
    }
}

export default reducer;