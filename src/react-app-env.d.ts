/// <reference types="react-scripts" />
interface IDay {
  id: string;
  date: string;
  todos: ITodo[];
}

interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}
