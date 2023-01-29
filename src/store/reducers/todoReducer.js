const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      alert("A todo was added...");
      return [action.todo.data, ...todos];
    case "UPDATE_TODO":
      alert("A todo was updated...");
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "CHECK_TODO":
      alert("A todo status was changed...");
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "DELETE_TODO":
      alert("A todo was deleted...");
      return todos.filter((todo) => todo._id !== action.id);
    case "CLEAR_TODOS":
      return [];
    default:
      return todos;
  }
};

export default todoReducer;
