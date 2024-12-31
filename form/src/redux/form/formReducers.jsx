// import { updateInput } from "./formActions";
import { UPDATE_INPUT } from "./formTypes";


const initialState = {
    name: "",
    email:""
}

const formReducers = (state = initialState, action) => {
    switch(action.types){
        case UPDATE_INPUT:
        return {
            ...state, 
            [action.payload.name]: action.payload.value
        };
    }
}


export default formReducers