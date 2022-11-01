import React from "react";
import { TodoItem } from "../../redux/slices/todoSlice";
import TaskCreatorBlock from "../taskCreatorBlock";
import style from "./todoList.module.scss";
import TodoTask from "./TodoTask";

const TodoList: React.FC<any> = ({
  todoList,
  deleteTodo,
  setActiveDeactive,
  editTodo,
  filter,
}) => {
  let filterTasks = [];
  switch (filter) {
    case "all":
      filterTasks = todoList;
      break;
    case "active":
      filterTasks = todoList.filter((todo: TodoItem) => todo.isActive === true);
      break;
    case "completed":
      filterTasks = todoList.filter(
        (todo: TodoItem) => todo.isActive === false
      );
      break;
    default:
      filterTasks = todoList;
      break;
  }

  return (
    <div className={style["todoList"]}>
      {filterTasks.map((todo: TodoItem) => (
        <TodoTask
          key={todo.id}
          deleteTodo={deleteTodo}
          setActiveDeactive={setActiveDeactive}
          todoItem={todo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
