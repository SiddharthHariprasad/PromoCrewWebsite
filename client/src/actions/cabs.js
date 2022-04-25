import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getCabs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCabs();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}


export const putCab = (cab) => async (dispatch) => {
    try {
        const { data } = await api.createCab(cab);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const updateCab = (id, cab) => async (dispatch) => {
    try {
        const { data } = await api.updateCab(id, cab);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const deleteCab = (id) => async (dispatch) => {
    try {
        await api.deleteCab(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}