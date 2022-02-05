import { Component } from 'react';
import './App.scss';
import Task from "./../Task/Task"
import ListBoard from '../ListBoard/ListBoard';

class App extends Component {
  state: any = { tasks: [] }

  drop = (event: any): void => {
    event.preventDefault();
    const taskID: any = event.dataTransfer.getData("taskID");
    const task: any = document.getElementById(taskID);
    event.target.appendChild(task);
  }

  dragOver = (event: any): void => event.preventDefault();

  appendDummyTask = (): void => {
    let allTasks = this.state.tasks;

    allTasks.push({
      id: "task_" + (new Date()).getTime(),
      text: "This is simple task with id " + (new Date()).getTime()
    })

    this.setState({ tasks: allTasks })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <ListBoard className="todos" title="On Progress Tasks">
            { this.state.tasks.map((single_task: any) => <Task id={ single_task.id } text={ single_task.text } />) }
            <button className="add-task" onClick={ this.appendDummyTask }>Add new task</button>
          </ListBoard>
          <ListBoard className="finished" title="Finished Tasks"></ListBoard>
        </div>
      </div>
    );
  }
}

export default App;