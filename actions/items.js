export const CLEAR_ITEMS = 'CLEAR_USER_ITEMS';
export const ADD_USER_ITEMS = 'ADD_USER_ITEMS';
export const ADD_ITEMS = 'ADD_ITEMS';

export const setUserItems = (items) => ({ type: SET_ITEMS, items });
export const addUserItems = (items) => ({ type: ADD_USER_ITEMS, items });
export const addItems = (items, typeName) => ({ type: ADD_ITEMS, items, typeName});

export const clearItems = () => ({ type: CLEAR_ITEMS, items: null });
