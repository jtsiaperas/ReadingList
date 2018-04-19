import React from "react";
import RecipeListItem from "./RecipeListItem";
// RecipeList renders a bootstrap list item
export const RecipeList = props=> (
  <ul className="list-group">
  	{props.recipes.map(recipe => (
  		<RecipeListItem title={recipe.title}
  		thumbnail = {recipe.thumbnail}
  		ingredients = {recipe.ingredients}
  		href = {recipe.href} />
  	))}
 </ul>
);
