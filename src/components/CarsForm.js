import { useDispatch, useSelector } from "react-redux";
import { addCar, updateName, updateValue } from "../store";

export default function CarsForm({handleChange}) {
  const dispatch = useDispatch();
  const {name, value} = useSelector((state)=>{
    return {
      name:state.form.name,
      value:state.form.value
    }
  })

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addCar({name,value}));
    handleChange('');
  }
  const handleValueChange = (event)=>{
    const ip = parseInt(event.target.value) || 0;
    dispatch(updateValue(ip));
  }
  const handleNameChange = (event)=>{
    handleChange(event.target.value);
    dispatch(updateName(event.target.value));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="car-name">Car Name</label>
        <input type="text" id="car-name" value={name} onChange={handleNameChange} />
        <label htmlFor="car-value">Car Value</label>
        <input type="text" id="car-value" value={value || ""} onChange={handleValueChange} />
        <button type="submit">Add Car</button>
      </form>
    </div>
  )
}
