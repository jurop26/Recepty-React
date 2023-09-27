import React, { Component } from 'react'
import IngredientsEditForm from './IngredientsEditForm.js'
import './App.css'

class RecepieEditForm extends Component {
    constructor(props) {
        super(props)
    
        this.addIngredientRow = this.addIngredientRow.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    addIngredientRow() {
        const { handleChanges, selectedRecepie} = this.props
        const ingredients = [...selectedRecepie.ingredients]
        const newRow = {name: '', amount: ''}
        ingredients.push(newRow)

        handleChanges({...selectedRecepie, ingredients: [...ingredients]})
    }

    handleChange(event) {
        const { handleChanges, selectedRecepie } = this.props
        const {name, value} = event.target
        const changes = {[name]: value}
        
        handleChanges({...selectedRecepie, ...changes})
    }
    
    render() {
        const { 
            selectedRecepie: {
                name,
                cookTime,
                servings,
                instructions,
                ingredients,
            },
            selectedRecepie,
            handleChanges
        } = this.props

        return(
            <>
                <div className='recepieForm'>
                    <label hmtlfor='name'>Name</label>                        
                    <input type='text' name='name' value={name} onChange={this.handleChange} />
                    <label hmtlfor='cookTime'>Cook Time</label>
                    <input type='text' name='cookTime' value={cookTime} onChange={this.handleChange} />
                    <label hmtlfor='servings'>Servings</label>
                    <input type='text' name='servings' value={servings} onChange={this.handleChange} />                     
                    <label hmtlfor='instructions'>Instructions</label>
                    <textarea type='text' name='instructions' value={instructions} onChange={this.handleChange} />  
                </div>

                <div className='ingredients'>
                    <label>Ingredients</label>
                    <IngredientsEditForm 
                        ingredients={ingredients}
                        selectedRecepie={selectedRecepie} 
                        handleChanges={handleChanges}
                    />
                </div>
                <div className='addIngredient-btn-container'>
                    <button className='button blue' onClick={this.addIngredientRow}>Add Ingredient</button>
                </div>
            </>
        )
    }
}

export default RecepieEditForm