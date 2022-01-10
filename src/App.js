import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./componets/Header.js";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks.js";
import TaskDetails from "./componets/TaskDetails.js";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "texte",
      completed: false,
    },
    {
      id: "2",
      title: "REACT",
      completed: false,
    },
  ]);

  //executa quando as task forem alteradas (adicionada, removida), se o segundo parametro estiver vazio executa somente quando for renderizado(carregado a página).
  /* useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");

      const data = response.data;
     

      setTasks(data);
    }

    fetchTasks();
  }, [] ) */

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  //pega todoas as task e adiciona mai uma com o titulo do imput
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />

        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />

                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            );
          }}
        />

        <Route path="/:TaskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
