import { useState } from "react";
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
  console.log(todo.isCompleted);

  return (
    <div>
      <li
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
          <button onClick={deleteTodoHandler}>Delete</button>
          <button onClick={doneTodoHandler}>Done</button>
        </div>
      )}
    </div>
  );
};
