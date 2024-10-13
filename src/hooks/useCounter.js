import { useState } from "react";

export default function useCounter(quantity) {
  const [count, setCount] = useState(quantity);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
