import { render } from "@testing-library/react";
import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
 // convert the ingredients obj into an array
 const transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
  return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
   return <BurgerIngredient key ={ingredientKey + i} type={ingredientKey} />
  })
 })

 // Object.keys() returns an arr from obj property names
 // .map() creates a new arr by callign a function on every element in the calling arr
 // .map() first arg is index, 2nd arg is element
 const test = ['dog', 'cat', 'bird'].map((x, y) => console.log("x " + x, "y " + y));
 console.log(test)
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />  
    </div>
  )
};

export default burger;
