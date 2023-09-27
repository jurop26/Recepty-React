import React from 'react'
import IngredientsList from './IngredientsList'

export default function Recepie(props) {
    const { 
      name,
      cookTime,
      servings,
      instructions,
      ingredients,
      index,
      handleRemoveRecepie,
      handleEditButton
     } = props

  return (
    <div className='single-recepie'>
      <div className='recepie-header'>
        <h2>{name}</h2> 
        <div>
          <button className='blue' onClick={() => handleEditButton(index)}>Edit</button>
          <button className='red' onClick={() => handleRemoveRecepie(index)}>Delete</button>
        </div>
      </div>
      
        <p><b>Cook Time:</b> {cookTime}</p>
        <p><b>Servings:</b> {servings}</p>
        <p><b>Insturctions:</b> {instructions}</p>
        <p><b>Ingredients:</b></p>
        <IngredientsList ingredients={ingredients} />
    </div>
  )
}

