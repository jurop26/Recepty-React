import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientsList( { ingredients } ) {
    return ingredients.map((ingredient, index) => {
      return (
        <Ingredient key={index} {...ingredient}/>
      )
    })
  }

 