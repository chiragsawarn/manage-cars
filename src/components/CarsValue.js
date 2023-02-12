export default function CarsValue({carsList}) {
  const totalValue = carsList.reduce((total, car)=>{
    return total + parseInt(car.value);
  }, 0);//0 is the inital value of total

  return (
    <div>
      <h5>{totalValue}</h5>
    </div>
  )
}
