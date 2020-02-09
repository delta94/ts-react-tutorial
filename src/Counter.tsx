// useState는 generic을 사용하지 않아도 type을 유추할 수 있기 때문에 굳이 사용하지 않아도 됨
// But Type이 null 이거나 객체 or 배열일 때 Generic을 명시하는 게 효율적임

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  // 요런식으로
  type Todo = { id: number; text: string; done: boolean };
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
