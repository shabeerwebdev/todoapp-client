import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteTodo, checkTodo } from "../../store/actions/todoActions";

const Todo = ({ todo, setTodo, todos }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleOnUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    setTodo({ ...foundTodo });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  return (
    <>
      <div className="todoStyle">
        <div>
          {todo.isComplete ? (
            <p variant="subtitle1" className="checked">
              {todo.name}
            </p>
          ) : (
            <p variant="subtitle1">{todo.name}</p>
          )}
          <p variant="body2" className="moreStyle">
            <span> Author:</span> {""} {todo.author}
          </p>
          <p variant="body2" className="moreStyle">
            <span> Created on:</span> {""}
            {moment(todo.date).fromNow()}
          </p>
          <p variant="body2" className="moreStyle">
            <span> Priority:</span> {""} {todo.priority}
          </p>
          <p variant="body2" className="moreStyle">
            <span> Description:</span> {""}
            {todo.description}
          </p>
          <p variant="body2" className="moreStyle">
            <span> Status:</span> {""}
            <div>
              {todo.isComplete ? "Completed" : "Pending"}
              <button onClick={() => handleCheck(todo._id)}>
                {todo.isComplete ? (
                  <span class="material-symbols-outlined">check_circle</span>
                ) : (
                  <span class="material-symbols-outlined">cancel</span>
                )}
              </button>
            </div>
          </p>
        </div>
        <div>
          {auth._id && auth._id === todo.uid ? (
            <div className="ButtonGroup">
              <button onClick={() => handleOnUpdateClick(todo._id)}>
                <span class="material-symbols-outlined">edit</span>
              </button>
              <button onClick={() => handleDelete(todo._id)}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Todo;
