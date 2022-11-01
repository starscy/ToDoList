import React from "react";
import RadioFilterSection from "../../radioFilterSection";
import Button from "../button";

type TaskCreatorBlockProps = {
  addTodoTask: (todo: { name: string; description: string }) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const TaskCreatorBlock: React.FC<TaskCreatorBlockProps> = ({
  addTodoTask,
  setFilter,
}) => {
  const [todo, setTodo] = React.useState({
    name: "",
    description: "",
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <div className="taskCreatorSection">
      <h2>Написать задачу</h2>
      <div className="taskcreatorBlock">
        <div className="taskcreatorBlock__name">
          <input
            type="text"
            value={todo.name}
            onChange={handleSubmit}
            name="name"
          />
          <label>Имя задачи</label>
        </div>
        <div className="taskcreatorBlock__description">
          <input
            type="text"
            value={todo.description}
            onChange={handleSubmit}
            name="description"
          />
          <label>Описание задачи</label>
        </div>
      </div>
      <div className="taskCreatorSection__btn">
        <RadioFilterSection setFilter={setFilter} />
        <Button
          onClick={() => addTodoTask(todo)}
          children="Создать"
          color="green"
        />
      </div>
    </div>
  );
};

export default TaskCreatorBlock;
