import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import todosActions from "../services/actions/todosActions";

const Todos = () => {
  const { todo, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosActions());
  }, []);

  return (
    <div>
      <h1>Todo app</h1>
      {isLoading && <h1>loading....</h1>}
      {todo.map((to) => (
        <p key={to.id}>{to.title}</p>
      ))}
      {
        error && <h1>{error}</h1>
      }
    </div>
  );
};

export default Todos;
