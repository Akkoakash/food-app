import React, { useState } from 'react';

import TopBar from './TopBar';
import "./App.css";
import { Food } from './Food';

export default function App() {
  const foodList= [
  
    {
        name : "Burger",
        poster: "https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg",
        rating: "8"
    },
    {
        name : "French Fries",
        poster: "https://static.toiimg.com/thumb/54659021.cms?width=1200&height=900",
        rating: "8.5"
    },
    {
        name : "Pizza",
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg&q=60",
        rating: "6"
    },
    {
        name : "Franki",
        poster: "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Vegetable-Frankie.jpg",
        rating: "7"
    },
    {
        name : "Cheese Balls",
        poster: "https://mytastycurry.com/wp-content/uploads/2019/03/Cheese-Balls-classic.jpg",
        rating: "9"
    },
    {
      name : "Momo",
      poster: "https://www.cookclickndevour.com/wp-content/uploads/2016/11/whole-wheat-momos-recipe-2.jpg",
      rating: "7.5"
    },
    {
      name: "Noodles",
      poster: "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",
      rating: "8.5"
    },
    {
      name: "Nuggets",
      poster: "https://www.aheadofthyme.com/wp-content/uploads/2020/06/easy-homemade-chicken-nuggets-8.jpg",
      rating: "8.3"
    },
    {
      name: "Oreo Milkshake",
      poster: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Oreo-Milkshake-10.jpg",
      rating: "9.5"
    },
    {
      name: "Cold Coffee",
      poster: "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
      rating: "7.3"
    },
    {
      name: "Kebab",
      poster: "https://www.licious.in/blog/wp-content/uploads/2020/12/Turkish-Kebabs-min.jpg",
      rating: "7.8"
    },
    {
      name: "Ice Cream Yule Log",
      poster: "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/12/21121337/buche-a-la-creme-glacee.jpg",
      rating: "9.2"
    },
];
  return(
  <div >
    <TopBar/>
    <div className='food-list'>
    {foodList.map(({name, poster, rating})=>(
      <Food name={name} poster={poster} rating={rating}/>
    ))}
  </div>
  </div>
  );
}


