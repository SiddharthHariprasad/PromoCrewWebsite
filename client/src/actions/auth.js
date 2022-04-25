import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

// Action Creators
export const signin = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData);
        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error.message);
        let signInFail = document.getElementById("accountNoneExistent");
        signInFail.removeAttribute("hidden");
        setTimeout(() => { signInFail.setAttribute('hidden', ""); }, 5000);
    }
}

export const signup = (userData, history) => async (dispatch) => {
    try {
        if (userData.firstName !== "" && userData.lastName !== "") {
            const { data } = await api.signUp(userData);
            dispatch({ type: AUTH, payload: data });
            history.push('/');
        } else {
            let detailsMissing = document.getElementById("detailsMissing");
            detailsMissing.removeAttribute("hidden");
            setTimeout(() => { detailsMissing.setAttribute('hidden', ""); }, 3000);
        }
    } catch (error) {
        console.log(error.message);
        let passNotMatch = document.getElementById("passwordMisMatch");
        let accountExists = document.getElementById("accountExists");
        if (userData.confirmPassword === "" || userData.confirmPassword !== userData.password) {
            passNotMatch.removeAttribute("hidden");
            setTimeout(() => { passNotMatch.setAttribute('hidden', ""); }, 3000);
        } else if (userData.confirmPassword === userData.password) {
            accountExists.removeAttribute("hidden");
            setTimeout(() => { accountExists.setAttribute('hidden', ""); }, 3000);
        } else {
            alert("Something went wrong, please refresh and try again.");
        }
    }
}