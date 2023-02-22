import { useState } from "react";
import "./Todos.scss";
import { useAppDispatch } from "../../store/hooks";
import {
  removeTodo,
  toggleCompletedTodo,
} from "../../store/reducers/TodoListSlice";
interface IProps {
  todo: ITodo;
  dayId: string;
}

export const Todo: React.FC<IProps> = ({ todo, dayId }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  const deleteTodoHandler = () => {
    dispatch(removeTodo({ dayId, todoId: todo.id }));
    setOpenModal(false);
  };

  const doneTodoHandler = () => {
    dispatch(toggleCompletedTodo({ dayId, todoId: todo.id }));
    setOpenModal(false);
  };

  return (
    <>
      <li
        className="todo"
        style={{ color: todo.isCompleted ? "green" : "red" }}
        onClick={() => setOpenModal(true)}
      >
        {todo.text}
      </li>
      {openModal && (
        <div className="background" onClick={() => setOpenModal(false)} />
      )}
      {openModal && (
        <div className="modal">
          <button className="modal__button" onClick={deleteTodoHandler}>
            Delete
          </button>
          <button className="modal__button" onClick={doneTodoHandler}>
            Done
          </button>
        </div>
      )}
    </>
  );
};
