// src/components/IngredientList.jsx

const IngredientList = (props) => {

    return (
        <ul>
            {props.availableIngredients.map((availableIngredient) => {
            return (
            <li style={{ backgroundColor: availableIngredient.color }}>
                {availableIngredient.name}
                <button onClick={() => props.addToBurger(availableIngredient)}>+</button>
            </li>
            );
        })}
        </ul>
    );
};
  
export default IngredientList;