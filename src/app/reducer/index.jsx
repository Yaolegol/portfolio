import { localeReducer } from "modules/Locale/reducer";
import { mobileMenuReducer } from "modules/MobileMenu/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    locale: localeReducer,
    mobileMenu: mobileMenuReducer,
});
