import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TodoItem = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
};
export type TodoListType = Array<TodoItem>;

export interface todoSlice {
  todoListItems: Array<TodoItem>;
}

const initialState: todoSlice = {
  todoListItems: [
    { id: "0", name: "todolist", description: "done todoList", isActive: true },
    {
      id: "1",
      name: "todolist, when done",
      description: "push todolist on GitHubPages",
      isActive: true,
    },
    {
      id: "2",
      name: "resume",
      description: "add this project in my resume",
      isActive: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTaskToReducer: (state, action: PayloadAction<TodoItem>) => {
      state.todoListItems.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.todoListItems = state.todoListItems.filter(
        (todo) => todo.id !== action.payload
      );
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.todoListItems = state.todoListItems.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, ["isActive"]: !todo.isActive };
        } else return todo;
      });
    },
    editTask: (
      state,
      action: PayloadAction<{
        id: string;
        task: { name: string; description: string };
      }>
    ) => {
      state.todoListItems = state.todoListItems.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ["name"]: action.payload.task.name,
            ["description"]: action.payload.task.description,
          };
        } else return todo;
      });
    },
  },
});

export const { addTaskToReducer, deleteTask, completeTask, editTask } =
  todoSlice.actions;

export default todoSlice.reducer;
