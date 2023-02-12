import {configureStore} from '@reduxjs/toolkit';
import {addCar, removeCar, carsReducer} from './slices/carsSlice';
import {updateName, updateValue, formReducer} from './slices/formSlice';

const store = configureStore({
    reducer:{
        cars:carsReducer,
        form:formReducer
    }
})

console.log(JSON.stringify(store.getState()));
store.dispatch(addCar({name:"Volvo 200", value:"25000"}))
store.dispatch(addCar({name:"Ford Figo", value:"10000"}))
console.log(JSON.stringify(store.getState()));

export {store, addCar, removeCar, updateName, updateValue};