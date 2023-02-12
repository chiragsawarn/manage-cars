import CarsForm from './components/CarsForm';
import CarsSearch from './components/CarsSearch';
import CarsList from './components/CarsList';
import CarsValue from './components/CarsValue';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const App = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const carsList = useSelector((state)=> state.cars);
    const filteredCarsList = carsList.filter((car)=>{
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    
    return (
        <div>
            <CarsForm handleChange={setSearchTerm} />
            <CarsSearch value={searchTerm} handleChange={setSearchTerm} />
            <CarsList carsList={filteredCarsList} />
            <CarsValue carsList={filteredCarsList} />
        </div>
    );
}

export default App;