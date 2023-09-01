import { WITHDRAW, DEPOSIT } from "../action_types";

const initialState = {
    balance: 0,
}

const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case WITHDRAW:
            return {
                ...state,
                balance: state.balance - action.payload
            }
        default:
            return state;
    }
}

export default bankReducer;