export default function CarsSearch({value, handleChange}) {
  return (
    <div>
      <label htmlFor="search">Search Cars</label>
      <input type="text" id="search" onChange={(event)=>{handleChange(event.target.value)}}/>
    </div>
  )
}
