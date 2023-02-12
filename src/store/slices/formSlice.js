import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name:'form',
    initialState:{name:'', value:0},
    reducers:{
        updateName(state, action){
            state.name = action.payload
        },
        updateValue(state, action){
            state.value = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addCar, (state, action)=>{
            state.name = '';
            state.value = 0;
        });
    }
})

export const formReducer = formSlice.reducer;
export const {updateName, updateValue} = formSlice.actions;