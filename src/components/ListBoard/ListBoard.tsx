import { Component } from 'react';
import './ListBoard.scss';

interface ListBoardProps {
    title: string,
    className: string
}

class ListBoard extends Component<ListBoardProps> {

  drop = (event: any): void => {
    event.preventDefault();
    const taskID: any = event.dataTransfer.getData("taskID");
    const task: any = document.getElementById(taskID);
    event.target.appendChild(task);
  }

  dragOver = (event: any): void => event.preventDefault();

  render() {
    return (
        <div className="list" onDrop={ this.drop } onDragOver={ this.dragOver }>
            <h3 className="title">{ this.props.title }</h3>
            <div className={ this.props.className }>{ this.props.children }</div>
        </div>
    );
  }
}

export default ListBoard;