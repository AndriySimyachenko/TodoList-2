import "./Day.scss";
import { Todo } from "../Todos/Todos";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/reducers/TodoListSlice";

interface IProps {
  day: IDay;
}

export const Day: React.FC<IProps> = ({ day }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const changeText = (event: any) => {
    setText(event.target.value);
  };

  const addTaskHandler = () => {
    if (text.length > 2) {
      dispatch(addTodo({ dayId: day.id, text }));
      setText("");
      setIsModalVisible(false);
    }
  };

  const toggleModal = () => setIsModalVisible((prev) => !prev);

  return (
    <div className="day days-list__day">
      <div className="day__header">
        <li className="day__title"> {day.date}</li>
        <span className="day__addButton" onClick={toggleModal}>
          &#43;
        </span>
      </div>
      <ul className="todoList">
        {day.todos.map((todo: ITodo) => {
          return <Todo dayId={day.id} todo={todo} key={todo.id} />;
        })}
      </ul>

      {isModalVisible && (
        <div className="background" onClick={() => setIsModalVisible(false)} />
      )}
      {isModalVisible && (
        <div className="modal">
          <input
            className="modal__input"
            type="text"
            onChange={(e) => changeText(e)}
            value={text}
            placeholder="Add some task"
          />
          <button className="modal__addButton" onClick={addTaskHandler}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};
