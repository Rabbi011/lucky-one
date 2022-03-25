import React from 'react';

const Bonus = () => {
    return (
        <div>
            <div>
            <h2>How React Work?</h2>
            <p>If there are numerous state changes, React does not commit them one after the other. React, on the other hand, walks through its virtual DOM, makes a list of the modifications that need to be made to the actual DOM, and then performs everything in one go. React, to put it another way, performs batch updates.</p>
            </div>

            <div>
            <h2>Props vs State</h2>
            <p>State:The state of a component is its internal state, which cannot be accessed or modified outside of the component. It's the same thing as using local variables in a function.</p>
            <p>Props:Make components reusable, on the other hand, by allowing them to receive data from their parent component in the form of props. They're the same thing as function arguments.</p>
            </div>
            <div>
           <h2>How useState works?</h2>
           <p>useState is a Hook that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value (not necessarily the starting state) and another function to update it.</p>
            </div>
        </div>
    );
};

export default Bonus;