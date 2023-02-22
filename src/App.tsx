import React from "react";
import "./App.scss";
// import cn from 'classnames';
import { Day } from "./components/Day/Day";
import { useAppSelector } from "./store/hooks";
import { todoSelector } from "./store/reducers/TodoListSlice";

const App = () => {
  const { days } = useAppSelector(todoSelector);
  return (
    <div className="page">
      <ul className="days-list page__days-list">
        {days.map((day: IDay) => {
          return <Day day={day} key={day.id} />;
        })}
      </ul>
    </div>
  );
};

export default App;
