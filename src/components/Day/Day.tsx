import "./Day.scss";
import { Todo } from "../Todos/Todos";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/reducers/TodoListSlice";

interface IProps {
  day: IDay;
}

export const Day: React.FC<IProps> = ({ day }) => {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const changeText = (event: any) => {
    setText(event.target.value);
  };

  const addTaskHandler = () => {
    if (text.length > 2) {
      dispatch(addTodo({ dayId: day.id, text }));
      setText("");
      setOpenModal(false);
    }
  };
  return (
    <div className="daysList">
      <div className="dayHeader">
        <li> {day.date}</li>
        <span className="addButton" onClick={() => setOpenModal(true)}>
          &#43;
        </span>
      </div>
      <ul>
        {day.todos.map((todo: ITodo) => {
          return <Todo dayId={day.id} todo={todo} key={todo.id} />;
        })}
      </ul>
      {openModal && (
        <div className="background" onClick={() => setOpenModal(false)} />
      )}
      {openModal && (
        <div className="modal">
          <input
            type="text"
            onChange={(e) => changeText(e)}
            value={text}
            placeholder="Add some task"
          />
          <button onClick={addTaskHandler}>Add</button>
        </div>
      )}
    </div>
  );
};
