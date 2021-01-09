import { localeReducer } from "modules/Locale/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    locale: localeReducer,
});
