import React, {useState} from 'react'
import dropDownSvg from '../assets/icons/down.svg'

const TodoItem = () => {
  const [showPoints, setShowPoints] = useState<boolean>(false);

  // todo
  const deleteTodo = () => {
  }

  return (
    <div className="todos" onMouseEnter={() => setShowPoints(true)} onMouseLeave={() => setShowPoints(false)}>
      <button
        className={`todos-delete-button ${showPoints ? 'todos-visibility' : ''}`}
        onClick={deleteTodo}
      >&#10006;
      </button>
      <div className="todos__title">todos title</div>
      <button className={`todos__create-new-task ${showPoints ? 'todos-visibility' : ''}`}>+</button>
      <button className="todos__button">
        <img style={{width: '13px'}} src={dropDownSvg} alt=""/>
      </button>
      <div className={`todos-info ${showPoints ? 'todos-visibility' : ''}`}>
        <ol className="todos-list">
          <li className="todos-item">
            <span className="todos-item__title">text todo </span>
            <div className="todos-item__buttons">
              <input type="checkbox"/>
              <button>&#10006;</button>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TodoItem
