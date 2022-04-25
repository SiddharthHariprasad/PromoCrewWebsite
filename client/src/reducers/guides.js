import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
const reducer = (guides = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...guides, action.payload];
        case UPDATE:
            return guides.map((guide) => guide._id === action.payload._id ? action.payload : guide);
        case DELETE:
            return guides.filter((guide) => guide._id !== action.payload._id);
        default:
            return guides;
    }
}

export default reducer;