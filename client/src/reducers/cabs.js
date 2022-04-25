import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (cabs = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...cabs, action.payload];
        case UPDATE:
            return cabs.map((cab) => cab._id === action.payload._id ? action.payload : cab);
        case DELETE:
            return cabs.filter((cab) => cab._id !== action.payload._id);
        default:
            return cabs;
    }
}

export default reducer;