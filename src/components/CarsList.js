import { useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarsList({carsList}) {
    const dispatch = useDispatch();
    const handleRemove = (index)=>{
      dispatch(removeCar(index));
    }
    const renderedCars = carsList.map((car, index)=>{
      return (
        <div key={index}>
          <div>
            <h4>{car.name}</h4>
            <button onClick={()=>{handleRemove(index)}}>Remove</button>
          </div>
          <div>{car.value}</div>
        </div>
      );
    })
    return (
      <div>
        {renderedCars}
      </div>
    )
  }
  