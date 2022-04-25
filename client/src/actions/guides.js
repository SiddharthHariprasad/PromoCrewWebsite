import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getGuides = () => async (dispatch) => {

    try {
        const { data } = await api.fetchGuides();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}


export const putGuide = (guide) => async (dispatch) => {

    try {
        const { data } = await api.createGuide(guide);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const updateGuide = (id, guide) => async (dispatch) => {
    try {
        const { data } = await api.updateGuide(id, guide);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const deleteGuide = (id) => async (dispatch) => {
    try {
        await api.deleteGuide(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}