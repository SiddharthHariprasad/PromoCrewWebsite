import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getOrders = () => async (dispatch) => {

    try {
        const { data } = await api.fetchOrders();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}


export const putOrder = (order) => async (dispatch) => {

    try {
        const { data } = await api.createOrder(order);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const updateOrder = (id, order) => async (dispatch) => {
    try {
        const { data } = await api.updateOrder(id, order);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    try {
        await api.deleteOrder(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
        alert("Something went wrong, please refresh and try again.");
    }
}