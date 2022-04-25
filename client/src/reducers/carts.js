import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (carts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...carts, action.payload];
        case UPDATE:
            return carts.map((cart) => cart._id === action.payload._id ? action.payload : cart);
        case DELETE:
            return carts.filter((cart) => cart._id !== action.payload._id);
        default:
            return carts;
    }
}

export default reducer;