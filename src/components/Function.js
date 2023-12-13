import React from 'react'
import Button from 'react-bootstrap/Button';


const Function = ({ addOn, ingredients, setIngredients, prices }) => {
  const calculation = (addOn, amount = 1, operation = 'add') => {
    debugger
    let newIngredients = { ...ingredients };

    if (operation === 'add') {
      newIngredients[addOn] = (newIngredients[addOn] || 0) + amount;
    } else if (operation === 'sub') {
      newIngredients[addOn] = Math.max(0, (newIngredients[addOn] || 0) - amount);
    }

    setIngredients(newIngredients);
  };

  return (
    <div className='d-flex justify-content-around function'>
      <span>{addOn}: </span>
      <Button variant="primary" onClick={() => calculation(addOn, prices[addOn], 'sub')}> Less</Button>
      <Button variant="primary" onClick={() => calculation(addOn, prices[addOn])}>More</Button>
    </div>
  )
}

export default Function

