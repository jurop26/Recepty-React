import React from 'react'
import Recepie from './Recepie'

export default function RecepiesList( props ) {
  const {
    recepiesList,
    handleAddRecepie,
    handleRemoveRecepie,
    handleEditButton
  }= props
  return (
    <>
      {recepiesList.map((recepie, index) => {
        return (
          <Recepie 
            key={index} 
            {...recepie}
            index={index}
            handleRemoveRecepie={handleRemoveRecepie} 
            handleEditButton={handleEditButton}
            />
        )
      })}
      <div className='addRecepie-btn-container'>
        <button className='button blue' onClick={() => handleAddRecepie()}>Add Recepie</button>
      </div>
    </>  
  )
}
