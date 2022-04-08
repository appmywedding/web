export const SET_ITEMS = 'SET_ITEMS';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const ADD_ITEMS = 'ADD_ITEMS';

export const setItems = (items) => ({ type: SET_ITEMS, items });
export const addItems = (items) => ({ type: ADD_ITEMS, items });
export const clearItems = () => ({ type: CLEAR_ITEMS, items: null });
