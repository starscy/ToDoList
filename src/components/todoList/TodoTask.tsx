import React from "react";
import Button from "../button";
import style from "./todoList.module.scss";
import { ReactComponent as Done } from "../assets/done.svg";
import { ReactComponent as Attention } from "../assets/attention.svg";
import { TodoItem } from "../../redux/slices/todoSlice";

type TodoTaskProps = {
  deleteTodo: (id: string) => void;
  setActiveDeactive: (id: string) => void;
  todoItem: TodoItem;
  editTodo: (id: string, task: { name: string; description: string }) => void;
};

const TodoTask: React.FC<TodoTaskProps> = ({
  deleteTodo,
  setActiveDeactive,
  todoItem,
  editTodo,
}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [todo, setTodo] = React.useState({
    name: todoItem.name,
    description: todoItem.description,
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const editMode = (
    id: string,
    task: { name: string; description: string }
  ) => {
    if (isEdit) editTodo(id, task);
    setIsEdit(!isEdit);
  };

  return (
    <div
      className={
        todoItem.isActive
          ? style["todoTask"]
          : `${style["todoTask"]} ${style[`todoTask_active`]}`
      }
    >
      <div
        className={style["todoTask__circle"]}
        onClick={() => setActiveDeactive(todoItem.id)}
      >
        {todoItem.isActive && <Attention className={style["attention"]} />}
        <Done
          className={
            !todoItem.isActive ? style["complete"] : style["complete_deactive"]
          }
        />
      </div>
      <div
        className={
          todoItem.isActive
            ? style["todoTask__text"]
            : style["todoTask__text_deactive"]
        }
      >
        {!isEdit ? (
          <h3>{todoItem.name}</h3>
        ) : (
          <input
            type="text"
            value={todo.name}
            onChange={handleSubmit}
            name="name"
          />
        )}
        {!isEdit ? (
          <span>{todoItem.description}</span>
        ) : (
          <input
            type="text"
            value={todo.description}
            onChange={handleSubmit}
            name="description"
          />
        )}
      </div>
      <div className={style["todoTask__buttons"]}>
        <Button
          children={!isEdit ? "Изменить" : "Принять"}
          onClick={() => editMode(todoItem.id, todo)}
          color="orange"
        />
        <Button
          children="Удалить"
          onClick={() => deleteTodo(todoItem.id)}
          color="red"
        />
      </div>
    </div>
  );
};

export default TodoTask;
