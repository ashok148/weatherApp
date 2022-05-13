
import { RECEIVE_API_DATA } from "./actionType";
const initialState = {}
export default (state = initialState, {type,data})=>{
    switch(type){
        case RECEIVE_API_DATA:
            return data;
        default:
            return state;
    }
}