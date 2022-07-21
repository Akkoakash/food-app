import React, { useState } from 'react';
//import TopBar from './TopBar';
import "./App.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Switch, Route, useHistory} from "react-router-dom";
import { FoodList } from './FoodList';
import { FoodDetails } from './FoodDetails';

export default function App() {
  const INITIAL_FOOD_LIST= [
    {	
	    id:"100",
        name : "Paneer Butter Masala",
        poster: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
        rating: 8,
        summary: "Butter,Ginger-Garlic Paste,Black Pepper Powder,Red Chili Powder,Salt ,Kasuri Methi,Garam Masala,TomatoPuree,Cashew Paste,Paneer,Milk Cream ,Green Chili,Water ",
	     trailer:"https://youtu.be/oYZ--rdHL6I"
    },
    {
	    id:"101",
        name : "French Fries",
        poster: "https://static.toiimg.com/thumb/54659021.cms?width=1200&height=900",
        rating: 8.5,
        summary: "2 cups warm water,⅓ cup white sugar,2 large russet potatoes - peeled, and sliced into 1/4 inch strips,6 cups vegetable oil for frying,salt to taste",
        trailer:"https://youtu.be/BCFoDfESF3Y "
    },
    {
	    id:"102",
        name : "Ratatouille Provencale",
        poster: "https://wildwoodhealth.com/wp-content/uploads/sites/2/2019/07/ratatouille-provencale.jpg",
        rating: 7,
        summary:" ½ cup extra-virgin olive oil,2 large onions, quartered, 3 cloves garlic, minced, 2 pounds fresh tomatoes,quartered, 3 eggplants, sliced into 1/2-inch rounds, 6 zucchini, sliced 1/2-inch thick, ½ cup tomato puree (Optional), 3 tablespoons herbes de Provence, salt and ground black pepper to taste ",
        trailer:" https://youtu.be/TIK5Jmd5flw "
    },
    {
	    id:"103",
        name : "Cheese Balls",
        poster: "https://mytastycurry.com/wp-content/uploads/2019/03/Cheese-Balls-classic.jpg",
        rating: 9,
        summary:"1 pound ricotta cheese, 1 (8 ounce) package cream cheese, ¼ cup all-purpose flour, ½ teaspoon salt, ½ teaspoon vanilla extract, 2 teaspoons grated lemon zest, 2 eggs, beaten, 4 egg whites, ¾ cup white sugar ",
        trailer:" https://youtu.be/PqOH0L8b8gs"
    },
    {
	    id:"104",	
        name : "Momo",
        poster: "https://www.cookclickndevour.com/wp-content/uploads/2016/11/whole-wheat-momos-recipe-2.jpg",
        rating: 7.5,
        summary:" Cabbage, Spring Onion, Onion, Garlic,  Carrot, Paneer, Ginger, Green Chilli Paste, Black Pepper, Haldi, Salt, Oil, Water, Wheat Flour, Maida, Water",
        trailer:" https://youtu.be/IVM_CQvgxCg "
    },
    {
	    id:"105",
        name: "Noodles",
        poster: "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",
        rating: 8.5,
        summary:" 200 grams noodles – whole wheat or plain flour, 5 cups water, ½ teaspoon oil, ½ teaspoon salt,1 cup shredded 	cabbage, ½ cup shredded carrots, ⅓ cup chopped spring onions, 8 to 10 french beans, salt as required, crushed black pepper, 1 teaspoon rice vinegar ",
        trailer:" https://youtu.be/xWZeQBLV6q4 "
    },
    {
	    id:"106",
     	name: "Nuggets",
    	poster: "https://www.aheadofthyme.com/wp-content/uploads/2020/06/easy-homemade-chicken-nuggets-8.jpg",
        rating: 8.3,
        summary:" 2 potato, ½ tsp ginger garlic paste, ½ tsp chilli flakes, 3 tbsp cheddar cheese, ½ tsp mixed herbs, ¼ tsp pepper, salt to taste, ½ tsp chaat masala, ¼ cup bread crumbs, ¼ cup corn flour, ¼ tsp pepper, 1 cup bread crumbs, ¼ tsp salt, 	¼ cup water, oil for deep frying ",
        trailer:" https://youtu.be/ZXi3kWPN7h4 "
    },
    {
	    id:"107",
        name: "Kebab",
        poster: "https://www.licious.in/blog/wp-content/uploads/2020/12/Turkish-Kebabs-min.jpg",
        rating: 7.8,
        summary:" 1/2 kg - Chicken, 2 pcs - Egg, 2 tbsp - Maida/Corn flour, 3 tbsp - Kabab Powder, 2 tbsp - Chili powder, 2 tbsp - 	Lime juice, 1/2 cup - Curd, 2 tsp - Ginger Garlic paste, Salt, 1 tsp - Vinegar, Oil ",
        trailer:" https://youtu.be/6No7g2GptXY "
    },
];

const [foodList, setFoodList] = useState(INITIAL_FOOD_LIST);
const history = useHistory(); 

  return(
    <div className="App">
       <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
        <Button color="inherit" onClick={()=>history.push("/foods")}>Foods</Button>
        </Toolbar>
        </AppBar>
    
        <div className="route-container">
    <Switch>
    <Route path="/foods/:id"> 
    <FoodDetails /> 
    </Route>
      <Route path="/foods"> 
  <FoodList />
      </Route>
      <Route path="/">Welcome to the food app</Route>
      </Switch>
    </div>
    </div>
  );
}
    