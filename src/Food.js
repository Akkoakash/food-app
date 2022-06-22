import { Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import { useState } from "react";
import { Counter } from './Counter';
export function Food({ name, poster, rating }) {
  const styles = {
    color: rating > 7.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  return (
    <Card className='food-container'>
      <img src={poster} alt={name} className="food-poster" />
     <CardContent>
      <div className='food-specs'>
        <h2 className='food-name'>{name}</h2>
        <p style={styles}className='food-rating'>⭐{rating}</p>
      </div>
      </CardContent>
      <CardActions>
        <Counter/>
      </CardActions>
    </Card>
  );
}
;
