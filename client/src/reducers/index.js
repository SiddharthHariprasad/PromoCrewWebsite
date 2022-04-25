import { combineReducers } from 'redux';
import packs from './packs';
import tickets from './tickets';
import hotels from './hotels';
import cabs from './cabs';
import guides from './guides'
import users from './users';
import carts from './carts';
import orders from './orders';
import authReducer from './auth'


export default combineReducers({ packs, tickets, hotels, cabs, guides, users, carts, orders, authReducer });