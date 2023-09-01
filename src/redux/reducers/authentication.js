const initialState = {
    isAuthenticated: false,
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default authenticationReducer;