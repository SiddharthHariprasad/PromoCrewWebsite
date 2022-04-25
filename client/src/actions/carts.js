import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getCarts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchCarts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}


export const putCart = (cart) => async (dispatch) => {

    try {
        const { data } = await api.createCart(cart);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const updateCart = (id, cart) => async (dispatch) => {
    try {
        const { data } = await api.updateCart(id, cart);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const deleteCart = (id) => async (dispatch) => {
    try {
        await api.deleteCart(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}