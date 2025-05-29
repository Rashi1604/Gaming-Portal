import { combineReducers } from "redux";
import { reducer } from "./SendReducer";

const reducers=combineReducers({
    data:reducer
})

export {reducers};