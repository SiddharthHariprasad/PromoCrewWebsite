import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getHotels = () => async (dispatch) => {

    try {
        const { data } = await api.fetchHotels();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}


export const putHotel = (hotel) => async (dispatch) => {

    try {
        const { data } = await api.createHotel(hotel);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const updateHotel = (id, hotel) => async (dispatch) => {
    try {
        const { data } = await api.updateHotel(id, hotel);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const deleteHotel = (id) => async (dispatch) => {
    try {
        await api.deleteHotel(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}