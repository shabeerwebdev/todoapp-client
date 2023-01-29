import React from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

import { addTodo, updateTodo } from "../../store/actions/todoActions";

const useStyles = makeStyles({});

const AddTodo = ({ todo, setTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };

      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };

      dispatch(addTodo(newTodo));
    }
    setTodo({ name: "", isComplete: false });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className="formStyle"
        onSubmit={handleSubmit}
      >
        <input
          required
          type="text"
          placeholder="Title"
          id="enter-todo"
          autoFocus
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <textarea
          required
          placeholder="description"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        ></textarea>
        <p>Priority</p>
        <div className="radio">
          <input
            value="high"
            checked={todo.priority === "high"}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
            required
            name="priority"
            type="radio"
            id="high"
          />
          <label htmlFor="high">High</label>
        </div>
        <div className="radio">
          <input
            required
            name="priority"
            type="radio"
            id="asap"
            value="asap"
            checked={todo.priority === "asap"}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          />
          <label htmlFor="asap">ASAP</label>
        </div>
        <div className="radio">
          <input
            required
            name="priority"
            type="radio"
            id="low"
            value="low"
            checked={todo.priority === "low"}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          />
          <label htmlFor="low">Low</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTodo;
