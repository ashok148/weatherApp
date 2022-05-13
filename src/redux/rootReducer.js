import { combineReducers } from "redux";

import rootReducer from "./Reducers";

export const rootReducers=combineReducers({
    data: rootReducer
})