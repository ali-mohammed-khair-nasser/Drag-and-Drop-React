import { Component } from 'react';
import './Task.scss';

interface TaskProps {
  id: string,
  text: string
}

class Task extends Component<TaskProps> {

  dragStart = (event: any): void => event.dataTransfer.setData("taskID", event.target.id)
  dragOver = (event: any): void => event.stopPropagation();

  render() {
    return (
      <div className="task" id={ this.props.id } draggable onDragStart={ this.dragStart } onDragOver={ this.dragOver }>
        <p>{ this.props.text }</p>
      </div>
    );
  }
}

export default Task;