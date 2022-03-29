export const SET_INVITED = 'SET_INVITED';
export const CLEAR_INVITED = 'CLEAR_INVITED';

export const setInvited = (invited) => ({ type: SET_INVITED, invited });

export const clearInvited = () => ({ type: CLEAR_INVITED, invited: null });
