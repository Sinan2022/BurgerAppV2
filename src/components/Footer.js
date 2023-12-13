import React, { useState } from 'react';
import './Footer.css';
import Function from './Function';

const Footer = ({ prices, ingredients, setIngredients }) => {
  function sumIngredients(ingredients) {
    return Object.values(ingredients).reduce((total, amount) => total + amount, 0);
  }

  return (
    <div className="sticky-footer">
      Current prices: {sumIngredients(ingredients)}
      <div className='calculator'>
        <Function addOn='lettuce' ingredients={ingredients} setIngredients={setIngredients} prices={prices} />
        <Function addOn='bacon' ingredients={ingredients} setIngredients={setIngredients} prices={prices} />
        <Function addOn='cheese' ingredients={ingredients} setIngredients={setIngredients} prices={prices} />
        <Function addOn='meat' ingredients={ingredients} setIngredients={setIngredients} prices={prices} />
      </div>
    </div>

  )
}

export default Footer
