import { useCallback, useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  const factorialRecursive = useCallback((n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }, []);
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating factorial");
    if (input >= 0 && Number.isInteger(input)) {
      return factorialRecursive(input);
    } else {
      return "Invalid input";
    }
  }, [factorialRecursive, input]);
  // Your solution ends here

  return (
    <div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />

        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
