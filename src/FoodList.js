import { Food } from './Food';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { API } from "./global";

export function FoodList(){
    const [foodList, setFoodList] = useState([]);
    const getFoods = () => {
      fetch(`${API}/foods`,{
    method: "GET",
  })
  .then((data) => data.json())
  .then((mvs) => setFoodList(mvs));
    };
    useEffect(()=> getFoods(),[]);

const deleteFood = (id) => {
  fetch(`${API}/foods/${id}`, 
  {method: "DELETE",
}).then(() => getFoods());
};

return(
<div className='food-list'>
    {foodList.map(({name, poster, summary, id}, index)=>(
      <Food
      key={index}
      name={name} 
      poster={poster} 
      summary={summary} 
      deleteButton={
        <IconButton 
        style={{ marginLeft: "auto"}}
        onClick={( )=> deleteFood(id)} 
        aria-label="delete"
        color="error">
<DeleteIcon />
</IconButton>
      }
      id={id}
      />
    ))}
  </div>
  );
}
