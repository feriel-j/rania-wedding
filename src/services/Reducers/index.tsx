import { combineReducers } from "redux";
import contactReducer from "./contactReducer";



export const rootReducer = combineReducers({
contactReducer,
});

export type State = ReturnType<typeof rootReducer>;