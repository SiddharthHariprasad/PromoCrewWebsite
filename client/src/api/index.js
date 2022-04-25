import axios from 'axios';

// const API = axios.create({ baseURL: 'https://gods-own-tourism-backend.herokuapp.com/' });
const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchPacks = () => API.get('packs');
export const createPack = (newPack) => API.post('packs', newPack);
export const updatePack = (id, updatedPack) => API.patch('packs/' + id, updatedPack);
export const deletePack = (id) => API.delete('packs/' +  id);

export const fetchTickets = () => API.get('tickets');
export const createTicket = (newTicket) => API.post('tickets', newTicket);
export const updateTicket = (id, updatedTicket) => API.patch('tickets/' + id, updatedTicket);
export const deleteTicket = (id) => API.delete('tickets/' +  id);

export const fetchHotels = () => API.get('hotels');
export const createHotel = (newHotel) => API.post('hotels', newHotel);
export const updateHotel = (id, updatedHotel) => API.patch('hotels/' + id, updatedHotel);
export const deleteHotel = (id) => API.delete('hotels/' +  id);

export const fetchCabs = () => API.get('cabs');
export const createCab = (newCab) => API.post('cabs', newCab);
export const updateCab = (id, updatedCab) => API.patch('cabs/' + id, updatedCab);
export const deleteCab = (id) => API.delete('cabs/' +  id);

export const fetchGuides = () => API.get('guides');
export const createGuide = (newGuide) => API.post('guides', newGuide);
export const updateGuide = (id, updatedGuide) => API.patch('guides/' + id, updatedGuide);
export const deleteGuide = (id) => API.delete('guides/' +  id);

export const signIn = (userData) => API.post('users/signin', userData);
export const signUp = (userData) => API.post('users/signup', userData);

export const fetchCarts = () => API.get('carts');
export const createCart = (newCart) => API.post('carts', newCart);
export const updateCart = (id, updatedCart) => API.patch('carts/' + id, updatedCart);
export const deleteCart = (id) => API.delete('carts/' +  id);

export const fetchOrders = () => API.get('orders');
export const createOrder = (newOrder) => API.post('orders', newOrder);
export const updateOrder = (id, updatedOrder) => API.patch('orders/' + id, updatedOrder);
export const deleteOrder = (id) => API.delete('orders/' +  id);