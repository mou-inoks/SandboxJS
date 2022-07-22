import "./styles.css";
import TaskForm from "./TaskForm";
import { useState } from "react";
import TasksHeader from "./TasksHeader";
import { Provider } from "react-redux";
import TasksList from "./TasksList";

export default function App() {
  return (
    <div className="container">
      <article>
        <TasksHeader />
        <TasksList/>
        <footer>
          <TaskForm addTask/>
        </footer>
      </article>
    </div>
  );
}
