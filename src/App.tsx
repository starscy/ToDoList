import React from "react";
import "./App.scss";
import Header from "./components/header";
import TaskCreatorBlock from "./components/taskCreatorBlock";
import TodoList from "./components/todoList";
import { v4 as uuid } from "uuid";
import {
  addTaskToReducer,
  completeTask,
  deleteTask,
  editTask,
} from "./redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
  const todoTasks = useSelector(
    (state: RootState) => state.todoList.todoListItems
  );
  const [filter, setFilter] = React.useState("active");
  const [todoList, setTodoList] = React.useState(todoTasks);
  const dispatch = useDispatch();

  const addTodoTask = (todo: { name: string; description: string }) => {
    const randomId = uuid();
    const task = { ...todo, id: randomId, isActive: true };
    setTodoList([...todoList, task]);
    dispatch(addTaskToReducer(task));
  };
  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    dispatch(deleteTask(id));
  };
  const setActiveDeactive = (id: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ["isActive"]: !todo.isActive };
        } else return todo;
      })
    );
    dispatch(completeTask(id));
  };
  const editTodo = (
    id: string,
    task: { name: string; description: string }
  ) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ["name"]: task.name,
            ["description"]: task.description,
          };
        } else return todo;
      })
    );
    dispatch(editTask({ id, task }));
  };

  React.useEffect(() => {
    console.log(todoList, "todoList");
  }, [todoList]);

  return (
    <div className="app">
      <div className="container">
        <Header
          countAll={todoList.length}
          activeTask={todoList.filter((todo) => todo.isActive === true).length}
        />
        <TaskCreatorBlock addTodoTask={addTodoTask} setFilter={setFilter} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          setActiveDeactive={setActiveDeactive}
          editTodo={editTodo}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;
