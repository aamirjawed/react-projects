import { UPDATE_INPUT } from "./formTypes";

export const updateInput = (input) => {
    return {
        type:UPDATE_INPUT,
        payload:input
    }
}