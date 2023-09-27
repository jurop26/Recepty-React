import React from 'react'

const IngredientsEditForm = (props) => {
    const { 
        ingredients,
        selectedRecepie,
        handleChanges,
    } = props

    return ingredients.map((ingredient, index) => {
        return (
            <IngredientEdit 
                key={index} 
                {...ingredient} 
                index={index} 
                handleChanges={handleChanges}
                selectedRecepie={selectedRecepie}
            />
        )
    })
}

function IngredientEdit(props) {
    const {
        name, 
        amount,
        index,
        handleChanges,
        selectedRecepie 
    } = props
  
    function handleIngredientChange(event) {
        const {name, value} = event.target
        const ingredients = [...selectedRecepie.ingredients]
        const changes = {...ingredients[index], [name]: value}
        ingredients[index] = changes
        
        handleChanges({...selectedRecepie, ingredients: [...ingredients]})
    }
    
    function removeIngredient(index) {
        const ingredients = [...selectedRecepie.ingredients.filter((ingredient, i) => {return index !==i})]

        handleChanges({...selectedRecepie, ingredients: [...ingredients]})
    }

    return (
    <div className='ingredients'>
        <span>
            <input type="text" name='name' value={name} onChange={handleIngredientChange} />
        </span>
        <span>
            <input type="text" name='amount' value={amount} onChange={handleIngredientChange} />
        </span>
        <button className='red' onClick={() => removeIngredient(index)}>x</button>
    </div>
  )
}


export default IngredientsEditForm