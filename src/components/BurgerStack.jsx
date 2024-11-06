// `src/components/BurgerStack.jsx`

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stacks.map((stack) => {
            return (
            <li style={{ backgroundColor: stack.color }}>
                {stack.name}
                <button onClick={() => props.removeFromBurger(stack)}>-</button>
            </li>
            );
        })}
        </ul>
    );
};
  
export default BurgerStack;