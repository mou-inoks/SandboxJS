import "./styles.css";
// import TaskForm from "./TaskForm";
// import { useState } from "react";
// import TasksHeader from "./TasksHeader";
// import { Provider } from "react-redux";
// import TasksList from "./TasksList";

export default function App() {
  const obj = {
    a: {
      // To safely update obj.a.c, we have to copy each piece
      c: 3,
    },
    b: 2,
  }

  const obj2 = {
    // copy obj
    ...obj,
    // overwrite a
    a: {
      // copy obj.a
      ...obj.a,
      // overwrite c
      c: 42,
    },
  }

  const arr = ['a', 'b']
  // Create a new copy of arr, with "c" appended to the end
  const arr2 = arr.concat('c')

  // or, we can make a copy of the original array:
  const arr3 = arr.slice()
  // and mutate the copy:
  arr3.push('c')

  console.log(arr2, obj2)

  return (
    <div className="container">
      <h1>Sandbox</h1>
    </div>
  );
}
