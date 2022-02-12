const INITIAL_STATE = {
    email: "",
    password: ""
}

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_USER":
            return { ...state, ...action.payload }
        case "USER_INFO":
            return state;
        default: return state;
    }
};