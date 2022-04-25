import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (packs = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...packs, action.payload];
        case UPDATE:
            return packs.map((pack) => pack._id === action.payload._id ? action.payload : pack);
        case DELETE:
            return packs.filter((pack) => pack._id !== action.payload._id);
        default:
            return packs;
    }
}

export default reducer;