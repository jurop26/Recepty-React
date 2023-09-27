import React from 'react'

export default function Ingredient({ name, amount }) {
  return (
      <div>
          <span className='ingredietns-span'>{name}</span>
          <span className='ingredients-span'>{amount}</span>
      </div>
  )
}



