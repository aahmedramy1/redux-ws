import { DEPOSIT, WITHDRAW} from "../action_types";

export const deposit = (amount) => {
    return {
        type: DEPOSIT,
        payload: amount
    }
}

export const withdraw = (amount) => {
    return {
        type: WITHDRAW,
        payload: amount
    }
}