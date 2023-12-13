import React from 'react'
import './Burger.css';

const Burger = ({ ingredients = { lettuce: 0, bacon: 0, cheese: 0, meat: 0 }, prices }) => {
  const burgerContent = () => {
    const burger = [];
    Object.keys(prices).forEach(ingredient => {
      const quantity = Math.floor(ingredients[ingredient] / prices[ingredient]);
      for (let i = 0; i < quantity; i++) {
        burger.push(<div key={ingredient + i} className={`${ingredient}Side`}></div>);
      }
    });

    return burger.length === 0 ? <p className="noing">Add Ingredients</p> : burger;
  };

  return (
    <div>
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
    </div>
  )
}

export default Burger
