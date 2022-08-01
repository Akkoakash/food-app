import { Button, Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import { useHistory } from "react-router-dom";


export function Food({ name, poster, summary, deleteButton, id}) {
 
  const [show, setShow] = useState(true);
  const history = useHistory();
  return (
    <Card className='food-container'>
      <img src={poster} alt={name} className="food-poster" />
     <CardContent>
      <div className='food-specs'>
        <h2 className='food-name'>{name}
        <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            </h2>
        </div>
        {show ? <p className="food-summary">{summary}</p> : ""}
           <div className='procedure-container'>
            <IconButton
              color="primary"
              onClick={() => history.push(`/foods/${id}`)}
              aria-label="Toggle summary">
                <Button><b>Procedure</b></Button>
              </IconButton>
              </div> 
      </CardContent>
      <CardActions>
       <Counter/>{deleteButton}
      </CardActions>
    </Card>
  );
}
