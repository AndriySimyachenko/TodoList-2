import React from "react";
import { Day } from "./components/Day/Day";
import { useAppSelector } from "./store/hooks";
import { todoSelector } from "./store/reducers/TodoListSlice";

const App = () => {
  const { days } = useAppSelector(todoSelector);
  console.log(days);
  return (
    <div className="App">
      <ul>
        {days.map((day: IDay) => {
          return <Day day={day} key={day.id} />;
        })}
      </ul>
    </div>
  );
};

export default App;
