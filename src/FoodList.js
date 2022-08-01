import { Food } from './Food';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { API } from "./global";
import { TextField } from '@mui/material';

export function FoodList(){
    const [foodList, setFoodList] = useState([]);
    

    const search = (searchText) => {

      if(searchText==""){ getFoods(); }
      else{
        const FilterList = foodList.filter(row => {
          const rowValue = row["name"]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(searchText).toLowerCase())
            : true
        });
    
        setFoodList(FilterList);
      }
    }
    
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
  <div className='seachbar'>
     <TextField onChange={(event) => search(event.target.value)} label="Search" variant="outlined" />
  
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
  </div>
  );
}
