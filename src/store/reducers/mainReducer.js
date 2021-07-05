import {DECREASE, INCREASE, RESET} from "../actions/mainActions";

const initialState = {
    data: 0,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {...state, data: state.data + action.data};
        case DECREASE:
            return {...state, data: state.data - action.data};
        case RESET:
            return {...state, data: 0};
        default:
            return state;
    }
};

export default usersReducer;