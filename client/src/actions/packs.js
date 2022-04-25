import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getPacks = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPacks();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}


export const putPack = (pack) => async (dispatch) => {

    try {
        const { data } = await api.createPack(pack);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const updatePack = (id, pack) => async (dispatch) => {
    try {
        const { data } = await api.updatePack(id, pack);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const deletePack = (id) => async (dispatch) => {
    try {
        await api.deletePack(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}