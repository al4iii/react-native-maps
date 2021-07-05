export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';

export const increaseData = data => ({type: INCREASE, data});
export const decreaseData = data => ({type: DECREASE, data});
export const resetData = () => ({type: RESET});

export const increase = value => {
    return dispatch => {
        dispatch(increaseData(value));
    }
};

export const decrease = value => {
    return dispatch => {
        dispatch(decreaseData(value));
    }
};

export const reset = () => {
    return dispatch => {
        dispatch(resetData());
    }
};