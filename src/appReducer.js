import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import customersReducer from './reducers/customersReducer'
import purchasesReducer from './reducers/purchasesReducer'
export const appReducer = combineReducers({
    products: productsReducer,
    customers: customersReducer,
    purchases: purchasesReducer
})
