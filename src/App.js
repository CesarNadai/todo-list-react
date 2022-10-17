import './App.css';
import { useState } from 'react';



function App() {

  const [tasks, setTasks] = useState([])

  function add() {
    setTasks([...tasks, document.getElementById("task").value])
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <br/>
      <div id="form">
        <input id="task"/>
        <button onClick={add}>Add</button>
      </div>
      {tasks.map((name, index) => {
        return <div>
          <br/>
          <input type='checkbox'/>
          <h2 id="name">{name}</h2>
        </div>
      })}
    </div>
  );
}

export default App;
