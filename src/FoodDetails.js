import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from './global';

export function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
   fetch(`${API}/foods/${id}`,{
    method: "GET",
})
.then((data) => data.json())
.then((mv) => setFood(mv))
.catch((err) => console.log(err));
  }, []);
  
  const history = useHistory();
  return (
    <div>
     <iframe
      width="100%"
       height="650" 
       src={food.trailer}
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen></iframe>
      <div className="food-detail-container">
        <div className="food-specs">
          <h3 className="food-name">{food.name}</h3>
        </div>
        <p className="food-summary">{food.summary}</p>
        <Button variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
