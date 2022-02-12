import { createStore, combineReducers} from "redux";

//reducers
import { loginReducer } from "./reducers/login.js"

const AppReducers = combineReducers({
    loginReducer
});

export const Store = createStore(AppReducers);