import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/TodosActions";

const Todos = () => {
    const {isLoading, todos, error} = useSelector((state) => console.log(state)) || {}
    const dispatch = useDispatch()
    useEffect(() =>{
    dispatch(getAllTodos())
    },[])
    return (
        <div>
           <h1>Todos App</h1> 
           {
            isLoading && <p>Loading....</p>
           }
           {
            error &&  <p>{error.message}</p>
           }
           <section>
            {
                todos && todos.map((todo,index) => <article key={index}><p>{todo.id}</p>
                <h2>{todo?.title}</h2></article>)
            }
           </section>
        </div>
    );
};

export default Todos;