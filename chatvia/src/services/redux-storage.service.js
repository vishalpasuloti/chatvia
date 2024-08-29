//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//export const store =createStore(reducer);
export const store=configureStore({reducer:reducer});

function reducer(state,action){
    switch(action.type){
        case "userdata":
            return{...state,user:action.data};
            case "searchproduct":
                return{...state, searchterm: action.data};
                case "sellerdata":
                    return {...state,seller:action.data};
    }
}