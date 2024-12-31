import { createStore } from "redux";
import formReducers from "./form/formReducers";


export const store = createStore(formReducers)