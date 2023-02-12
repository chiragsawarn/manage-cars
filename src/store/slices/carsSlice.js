import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name:'cars',
    initialState:[],
    reducers:{
        addCar(state, action){
            state.push(action.payload);
        },
        removeCar(state, action){
            const idxToRemove = action.payload;
            state.splice(idxToRemove, 1);
        }
    }
})

export const carsReducer = carsSlice.reducer;
export const {addCar, removeCar} = carsSlice.actions;